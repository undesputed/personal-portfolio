import jsPDF from 'jspdf';
import { resumeData } from './resumeData';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  const lineHeight = 7;
  const sectionSpacing = 15;

  // Helper function to add text with word wrapping
  const addText = (text: string, x: number, y: number, maxWidth?: number, fontSize: number = 10) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth || contentWidth);
    doc.text(lines, x, y);
    return y + (lines.length * lineHeight);
  };

  // Helper function to add section header
  const addSectionHeader = (title: string, y: number) => {
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(title, margin, y);
    doc.setFont(undefined, 'normal');
    return y + lineHeight + 5;
  };

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Header Section
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text(resumeData.personalInfo.name, margin, yPosition);
  yPosition += lineHeight + 2;

  doc.setFontSize(14);
  doc.setFont(undefined, 'normal');
  doc.text(resumeData.personalInfo.title, margin, yPosition);
  yPosition += lineHeight + 2;

  // Contact Information
  doc.setFontSize(10);
  const contactInfo = [
    `Email: ${resumeData.personalInfo.email}`,
    `Phone: ${resumeData.personalInfo.phone}`,
    `Location: ${resumeData.personalInfo.location}`
  ];
  
  contactInfo.forEach(info => {
    doc.text(info, margin, yPosition);
    yPosition += lineHeight;
  });

  yPosition += sectionSpacing;

  // Professional Summary
  yPosition = addSectionHeader('PROFESSIONAL SUMMARY', yPosition);
  yPosition = addText(resumeData.personalInfo.summary, margin, yPosition, contentWidth, 10);
  yPosition += sectionSpacing;

  // Experience Section
  yPosition = addSectionHeader('PROFESSIONAL EXPERIENCE', yPosition);
  
  resumeData.experience.forEach((exp, index) => {
    checkNewPage(50); // Reserve space for experience entry
    
    // Company and Position
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`${exp.position} - ${exp.company}`, margin, yPosition);
    yPosition += lineHeight;
    
    // Location and Duration
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`${exp.location} | ${exp.duration}`, margin, yPosition);
    yPosition += lineHeight + 2;
    
    // Description
    yPosition = addText(exp.description, margin, yPosition, contentWidth, 10);
    yPosition += 3;
    
    // Projects
    if (exp.projects.length > 0) {
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text('Projects Handled:', margin, yPosition);
      yPosition += lineHeight;
      
      exp.projects.forEach(project => {
        doc.setFont(undefined, 'normal');
        doc.text(`• ${project}`, margin + 5, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 2;
    }
    
    // Technologies
    if (exp.technologies.length > 0) {
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text('Technologies Used:', margin, yPosition);
      yPosition += lineHeight;
      
      const techText = exp.technologies.join(', ');
      yPosition = addText(techText, margin + 5, yPosition, contentWidth - 5, 9);
      yPosition += 2;
    }
    
    // Databases
    if (exp.databases.length > 0) {
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text('Databases:', margin, yPosition);
      yPosition += lineHeight;
      
      const dbText = exp.databases.join(', ');
      doc.setFont(undefined, 'normal');
      doc.text(dbText, margin + 5, yPosition);
      yPosition += lineHeight + 2;
    }
    
    yPosition += sectionSpacing;
  });

  // Projects Section
  yPosition = addSectionHeader('KEY PROJECTS', yPosition);
  
  resumeData.projects.forEach((project, index) => {
    checkNewPage(40); // Reserve space for project entry
    
    // Project Title and Type
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(`${project.title} - ${project.type}`, margin, yPosition);
    yPosition += lineHeight;
    
    // Duration
    if (project.duration) {
      doc.setFontSize(9);
      doc.setFont(undefined, 'normal');
      doc.text(project.duration, margin, yPosition);
      yPosition += lineHeight + 2;
    }
    
    // Description
    yPosition = addText(project.description, margin, yPosition, contentWidth, 9);
    yPosition += 3;
    
    // Technologies
    if (project.technologies.length > 0) {
      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.text('Technologies:', margin, yPosition);
      yPosition += lineHeight;
      
      const techText = project.technologies.join(', ');
      yPosition = addText(techText, margin + 5, yPosition, contentWidth - 5, 8);
      yPosition += 2;
    }
    
    yPosition += sectionSpacing;
  });

  // Skills Section
  yPosition = addSectionHeader('TECHNICAL SKILLS', yPosition);
  
  // Technical Skills
  doc.setFontSize(10);
  doc.setFont(undefined, 'bold');
  doc.text('Programming Languages & Technologies:', margin, yPosition);
  yPosition += lineHeight;
  
  const techText = resumeData.skills.technical.join(', ');
  yPosition = addText(techText, margin + 5, yPosition, contentWidth - 5, 9);
  yPosition += 5;
  
  // Soft Skills
  doc.setFontSize(10);
  doc.setFont(undefined, 'bold');
  doc.text('Soft Skills:', margin, yPosition);
  yPosition += lineHeight;
  
  const softSkillsText = resumeData.skills.soft.join(', ');
  yPosition = addText(softSkillsText, margin + 5, yPosition, contentWidth - 5, 9);
  yPosition += sectionSpacing;

  // Education Section
  yPosition = addSectionHeader('EDUCATION', yPosition);
  
  resumeData.education.forEach(edu => {
    checkNewPage(20); // Reserve space for education entry
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(edu.institution, margin, yPosition);
    yPosition += lineHeight;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`${edu.degree} | ${edu.duration}`, margin, yPosition);
    yPosition += lineHeight + 5;
  });

  // Languages Section
  yPosition = addSectionHeader('LANGUAGES', yPosition);
  
  resumeData.languages.forEach(lang => {
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`${lang.name}: ${lang.level}`, margin, yPosition);
    yPosition += lineHeight;
  });

  // Save the PDF
  doc.save('Resume.pdf');
};
