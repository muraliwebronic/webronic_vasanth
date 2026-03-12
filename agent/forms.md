# Webronic Portfolio - Forms Documentation

This document lists all the active forms across the application, detailing their location, purpose, and specific input fields.

## 1. Home Page Contact Modal
**Location**: `src/section/home/Contact.tsx`
**Purpose**: General project enquiry and contact modal triggered from the Home page.
**Fields**:
- **Name**: Text input (`type="text"`, placeholder: "Your Name", required)
- **Email**: Email input (`type="email"`, placeholder: "email@company.com", required)
- **Requirement Type**: Select box
  - *Options*: Web Development, App Development, Digital Marketing, IoT Solutions, Cloud Infrastructure
- **Message**: Textarea (`rows={3}`, placeholder: "Tell us about your project...", required)
**Submit Action**: "Submit Request"

## 2. Contact Page Modal
**Location**: `src/app/contact/page.tsx`
**Purpose**: General project enquiry mapped to the dedicated Contact page. Identical structure to the Home Page form.
**Fields**:
- **Name**: Text input (`type="text"`, placeholder: "Your Name", required)
- **Email**: Email input (`type="email"`, placeholder: "email@company.com", required)
- **Requirement Type**: Select box
  - *Options*: Web Development, App Development, Digital Marketing, IoT Solutions, Cloud Infrastructure
- **Message**: Textarea (`rows={3}`, placeholder: "Tell us about your project...", required)
**Submit Action**: "Submit Request"

## 3. Services Page Consultation Modal
**Location**: `src/app/service/page.tsx`
**Purpose**: Specific service consultation request when a user selects a service from the services grid.
**Fields**:
- **Work Email**: Email input (`type="email"`, placeholder: "name@company.com")
- **Project Details**: Textarea (`rows={4}`, placeholder: "Briefly describe your requirements..")
**Submit Action**: "Request Consultation"

## 4. How It Works Modal (Services)
**Location**: `src/app/service/components/HowWorks.tsx`
**Purpose**: "Start Project" enquiry tied to a specific service overview card.
**Fields**:
- **Full Name**: Text input (`type="text"`, placeholder: "John Doe", required)
- **Email**: Email input (`type="email"`, placeholder: "name@company.com", required)
- **Phone**: Telephone input (`type="tel"`, placeholder: "+91..", required)
- **Project Goals**: Textarea (`rows={3}`, placeholder: "Tell us about your requirements..", required)
**Submit Action**: "Send Request"

## 5. Job Application (Careers)
**Location**: `src/app/careers/[id]/JobDetailsClient.tsx`
**Purpose**: Form to apply for a specific job position.
**Fields**:
- *Currently contains no input fields; only features a simulated submission button.*
**Submit Action**: "Submit Application"

## 6. Shipping & Support Request Modal
**Location**: `src/app/shipping/page.tsx`
**Purpose**: Support request and query submission regarding shipping and delivery.
**Fields**:
- **Full Name**: Text input (`type="text"`, placeholder: "Full Name", required)
- **Email Address**: Email input (`type="email"`, placeholder: "Email Address", required)
- **Query / Order Reference**: Textarea (`rows={4}`, placeholder: "Query / Order Reference", required)
**Submit Action**: "Send Query"

## 7. Refund Request Modal
**Location**: `src/app/refund/page.tsx`
**Purpose**: Form to formalize a refund or cancellation request for a continuous or project service.
**Fields**:
- **Contract No**: Text input (`type="text"`, placeholder: "Contract No", required)
- **Project Name**: Text input (`type="text"`, placeholder: "Project Name", required)
- **Billing Email**: Email input (`type="email"`, placeholder: "Billing Email", required)
- **Reason**: Textarea (`rows={3}`, placeholder: "Reason", required)
**Submit Action**: "Submit Request"
