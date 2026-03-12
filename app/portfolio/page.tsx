'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, ChevronUp, ChevronDown, X, ExternalLink } from 'lucide-react';
import projectsData from '@/data/projects.json';

// TypeScript interfaces
interface TechStack {
  frontend?: string[];
  backend?: string[];
  stateManagement?: string[];
  styling?: string[];
  testing?: string[];
  cloud?: string[];
  monitoring?: string[];
}

interface Duration {
  start: string;
  end: string;
}

interface Deployment {
  environment: string[];
  hosting: string;
}

interface Links {
  project?: string;
  repository?: string;
  documentation?: string;
}

interface Project {
  id: string;
  name: string;
  domain: string;
  description: string;
  techStack: TechStack;
  role: string;
  responsibilities: string[];
  impact: string[];
  projectType: string;
  organization: string;
  teamSize: number;
  duration: Duration;
  deployment: Deployment;
  links: Links;
  highlights: string[];
}

type SortField = 'name' | 'domain' | 'role' | 'projectType' | 'duration';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

const PortfolioPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ field: 'name', direction: 'asc' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 5;

  const projects: Project[] = projectsData.projects;

  // Helper function to get tech stack summary
  const getTechStackSummary = (techStack: TechStack): string => {
    const allTech = [
      ...(techStack.frontend || []),
      ...(techStack.backend || []),
      ...(techStack.stateManagement || []),
      ...(techStack.styling || [])
    ];
    return allTech.slice(0, 3).join(', ') + (allTech.length > 3 ? '...' : '');
  };

  // Helper function to format duration
  const formatDuration = (duration: Duration): string => {
    const start = new Date(duration.start + '-01');
    const end = duration.end === 'Present' ? new Date() : new Date(duration.end + '-01');
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0 && remainingMonths > 0) {
      return `${years}y ${remainingMonths}m`;
    } else if (years > 0) {
      return `${years}y`;
    } else {
      return `${remainingMonths}m`;
    }
  };

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getTechStackSummary(project.techStack).toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortConfig.field) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'domain':
          aValue = a.domain.toLowerCase();
          bValue = b.domain.toLowerCase();
          break;
        case 'role':
          aValue = a.role.toLowerCase();
          bValue = b.role.toLowerCase();
          break;
        case 'projectType':
          aValue = a.projectType.toLowerCase();
          bValue = b.projectType.toLowerCase();
          break;
        case 'duration':
          aValue = new Date(a.duration.start + '-01').getTime();
          bValue = new Date(b.duration.start + '-01').getTime();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [projects, searchTerm, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredAndSortedProjects.slice(startIndex, endIndex);

  // Sort handler
  const handleSort = (field: SortField) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Modal handlers
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Render sort icon
  const renderSortIcon = (field: SortField) => {
    if (sortConfig.field !== field) {
      return <ChevronUp className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ChevronUp className="w-4 h-4 text-blue-600" /> : 
      <ChevronDown className="w-4 h-4 text-blue-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my professional projects with detailed insights into technologies, 
            responsibilities, and impact delivered.
          </p>
        </div>

        {/* Search and Controls */}
        <Card className="mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {filteredAndSortedProjects.length} project{filteredAndSortedProjects.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </Card>

        {/* Table */}
        <Card className="mb-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Project Name</span>
                      {renderSortIcon('name')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort('domain')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Domain</span>
                      {renderSortIcon('domain')}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Tech Stack
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort('role')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Role</span>
                      {renderSortIcon('role')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort('projectType')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Type</span>
                      {renderSortIcon('projectType')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort('duration')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Duration</span>
                      {renderSortIcon('duration')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {currentProjects.map((project) => (
                  <tr 
                    key={project.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                    onClick={() => openModal(project)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {project.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {project.domain}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {getTechStackSummary(project.techStack)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {project.role}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge 
                        variant={project.projectType === 'Internal' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.projectType}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {formatDuration(project.duration)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Pagination */}
        {totalPages > 1 && (
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedProjects.length)} of {filteredAndSortedProjects.length} results
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="min-w-[2.5rem]"
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.name}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Project Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Domain:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{selectedProject.domain}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Organization:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{selectedProject.organization}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Team Size:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{selectedProject.teamSize} members</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Duration:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{formatDuration(selectedProject.duration)}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Full Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedProject.techStack).map(([category, technologies]) => (
                      <div key={category}>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Project Impact */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Impact
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.impact.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {selectedProject.links && Object.keys(selectedProject.links).length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Project Links
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(selectedProject.links).map(([type, url]) => (
                          <a
                            key={type}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;