'use client';

import { useState } from 'react';
import styles from './form.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkIcon from '@mui/icons-material/Link';

const steps = [
  { label: 'Company Details', description: 'Enter the company name and logo :' },
  { label: 'Address Information', description: 'Provide the address details of the company :' },
  { label: 'Contact Information', description: 'Provide contact details :' },
  { label: 'Social Media Links', description: 'Add the company\'s social media links :' },
];

const stepIcons = {
  1: <BusinessIcon />,
  2: <LocationOnIcon />,
  3: <ContactMailIcon />,
  4: <LinkIcon />,
};

export default function FormWithStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    zipcode: '',
    state: '',
  });
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyLicense, setCompanyLicense] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [socialMediaLinks, setSocialMediaLinks] = useState([{ name: '', url: '' }]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(file);
    }
  };

  const handleSocialMediaChange = (e, index, field) => {
    const newLinks = [...socialMediaLinks];
    newLinks[index][field] = e.target.value;
    setSocialMediaLinks(newLinks);
  };

  const handleAddSocialMediaField = () => {
    setSocialMediaLinks([...socialMediaLinks, { name: '', url: '' }]);
  };

  const handleRemoveSocialMediaField = (index) => {
    const newLinks = [...socialMediaLinks];
    newLinks.splice(index, 1);
    setSocialMediaLinks(newLinks);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Perform validation and submission
    const companyDetails = {
      companyName,
      companyAddress,
      companyWebsite,
      companyPhone,
      companyEmail,
      companyLicense,
      companyLogo: companyLogo ? companyLogo.name : '',
      socialMediaLinks,
    };
    alert(`Company Details Submitted:\n${JSON.stringify(companyDetails, null, 2)}`);
    // Reset form
    setCompanyName('');
    setCompanyAddress({ line1: '', line2: '', city: '', zipcode: '', state: '' });
    setCompanyWebsite('');
    setCompanyPhone('');
    setCompanyEmail('');
    setCompanyLicense('');
    setCompanyLogo(null);
    setSocialMediaLinks([{ name: '', url: '' }]);
    setActiveStep(0);
  };

  function CustomStepIcon(props) {
    const { icon, active, completed } = props;

    return (
      <div
        style={{
          color: completed ? '#1976d2' : active ? '#115293' : '#ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          width: 40,
          height: 40,
          backgroundColor: completed ? '#e3f2fd' : '#f5f5f5',
        }}
      >
        {stepIcons[icon]}
      </div>
    );
  }

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mt: 2 }}>
                {index === 0 && (
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                )}
                {index === 1 && (
                  <div>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      value={companyAddress.line1}
                      onChange={(e) => setCompanyAddress({ ...companyAddress, line1: e.target.value })}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Address Line 2"
                      value={companyAddress.line2}
                      onChange={(e) => setCompanyAddress({ ...companyAddress, line2: e.target.value })}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={companyAddress.city}
                      onChange={(e) => setCompanyAddress({ ...companyAddress, city: e.target.value })}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Zipcode"
                      value={companyAddress.zipcode}
                      onChange={(e) => setCompanyAddress({ ...companyAddress, zipcode: e.target.value })}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={companyAddress.state}
                      onChange={(e) => setCompanyAddress({ ...companyAddress, state: e.target.value })}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Company Website"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                )}
                {index === 2 && (
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      value={companyPhone}
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                )}
                {index === 3 && (
                  <div>
                    <button className={styles.add_btn} onClick={handleAddSocialMediaField}>
                      Add
                    </button>
                    {socialMediaLinks.map((link, idx) => (
                      <div key={idx} className={styles.socialMediaRow}>
                        <input
                          type="text"
                          placeholder="Name"
                          value={link.name}
                          onChange={(e) => handleSocialMediaChange(e, idx, 'name')}
                          className={styles.input}
                        />
                        <input
                          type="text"
                          placeholder="URL"
                          value={link.url}
                          onChange={(e) => handleSocialMediaChange(e, idx, 'url')}
                          className={styles.input}
                        />
                        <button
                          type="button"
                          className={styles.removeBtn}
                          onClick={() => handleRemoveSocialMediaField(idx)}
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <Box sx={{ mt: 2 }}>
                  <Button className={styles.btn}
                    variant="contained"
                    onClick={index === steps.length - 1 ? handleSubmit : handleNext}
                  >
                    {index === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                  <Button className={styles.btn}
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ ml: 2 }}
                  >
                    Back
                  </Button>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={3} sx={{ p: 3 }}>
          <Typography>All steps completed</Typography>
        </Paper>
      )}
    </Box>
  );
}
