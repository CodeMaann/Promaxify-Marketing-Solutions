import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input, Select, Textarea, Checkbox } from '@/components/ui/form';
import { useState, FormEvent } from 'react';
import { 
  User, Building, Mail, Phone, Briefcase, 
  MapPin, UploadCloud, Linkedin, Instagram, 
  Twitter, Target, Calendar, Hash, IndianRupee,
  FileBadge
} from 'lucide-react';

export function Contact() {
  // Form A State
  const [formA, setFormA] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: ''
  });
  const [errorsA, setErrorsA] = useState<Record<string, string>>({});
  const [successA, setSuccessA] = useState(false);

  // Form B State
  const [formB, setFormB] = useState({
    name: '', company: '', designation: '', phone: '', 
    objective: '', quantity: '', budget: '', timeline: ''
  });
  const [checkboxesB, setCheckboxesB] = useState<Record<string, boolean>>({
    gifting: false, apparel: false, merchandise: false, 
    exhibition: false, welcomeKits: false, events: false
  });
  const [errorsB, setErrorsB] = useState<Record<string, string>>({});
  const [successB, setSuccessB] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);

  // Simple Validation Helpers
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\+?[0-9\s\-()]{7,15}$/.test(phone);

  const handleSubmitA = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formA.name) newErrors.name = 'Name is required';
    if (!formA.company) newErrors.company = 'Company is required';
    if (!formA.email || !validateEmail(formA.email)) newErrors.email = 'Valid email required';
    if (!formA.phone || !validatePhone(formA.phone)) newErrors.phone = 'Valid phone required';
    if (!formA.service) newErrors.service = 'Please select a service';

    if (Object.keys(newErrors).length > 0) {
      setErrorsA(newErrors);
      setSuccessA(false);
    } else {
      setErrorsA({});
      setSuccessA(true);
      // Mock submit
      setTimeout(() => setSuccessA(false), 5000);
      setFormA({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    }
  };

  const handleNextStep = () => {
    const newErrors: Record<string, string> = {};
    if (!formB.name) newErrors.name = 'Name is required';
    if (!formB.company) newErrors.company = 'Company is required';
    if (!formB.phone || !validatePhone(formB.phone)) newErrors.phone = 'Valid phone required';
    
    const hasService = Object.values(checkboxesB).some(Boolean);
    if (!hasService) newErrors.services = 'Select at least one project detail';

    if (Object.keys(newErrors).length > 0) {
      setErrorsB(newErrors);
    } else {
      setErrorsB({});
      setWizardStep(2);
    }
  };

  const handleSubmitB = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formB.objective) newErrors.objective = 'Objective is required';
    if (!formB.quantity) newErrors.quantity = 'Quantity is required';
    if (!formB.budget) newErrors.budget = 'Budget is required';
    if (!formB.timeline) newErrors.timeline = 'Timeline is required';

    if (Object.keys(newErrors).length > 0) {
      setErrorsB(newErrors);
      setSuccessB(false);
    } else {
      setErrorsB({});
      setSuccessB(true);
      // Mock submit
      setTimeout(() => setSuccessB(false), 5000);
      setFormB({ name: '', company: '', designation: '', phone: '', objective: '', quantity: '', budget: '', timeline: '' });
      setCheckboxesB({ gifting: false, apparel: false, merchandise: false, exhibition: false, welcomeKits: false, events: false });
      setWizardStep(1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      
      {/* 1. Intro Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1440px] mx-auto text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-block">
            <h2 className="font-accent text-sm md:text-base font-bold tracking-[0.2em] text-brand-orange uppercase mb-4">
              Big or small, every requirement matters.
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-brand-dark leading-[1.1]">
            Customized. Branded. Delivered. <span className="text-brand-orange">Let's Connect!!</span>
          </h1>

          <p className="text-[1.35rem] md:text-2xl text-neutral-600 font-medium" style={{ fontFamily: 'Candara, Optima, Segoe UI, sans-serif', fontStyle: 'italic' }}>
            "Let's create something that represents your brand better."
          </p>

          <p className="text-lg text-neutral-600 font-body leading-relaxed max-w-3xl mx-auto border-t border-neutral-200 pt-8 mt-8">
            At Promaxify Marketing Solutions, we are dedicated to helping your business grow and succeed. Partner with us and experience the difference of working with a team that truly cares about your brand's success. Let us help you elevate, maximize, and magnify your brand's presence in the market.
          </p>
        </motion.div>
      </section>

      {/* 2. Forms Section */}
      <section className="py-12 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* CARD A: Quick Enquiry */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-200 shadow-xl shadow-brand-charcoal/5"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-sans font-bold text-brand-dark mb-3">Quick Enquiry</h3>
              <p className="text-neutral-500 font-body text-sm">Tell us briefly about your requirement and our team will connect with you.</p>
            </div>
            
            <form onSubmit={handleSubmitA} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Input 
                    placeholder="Full Name" 
                    icon={<User className="h-5 w-5" />} 
                    value={formA.name}
                    onChange={(e) => setFormA({...formA, name: e.target.value})}
                    error={!!errorsA.name}
                  />
                  {errorsA.name && <p className="text-red-500 text-xs mt-1.5 ml-2">{errorsA.name}</p>}
                </div>
                <div>
                  <Input 
                    placeholder="Company Name" 
                    icon={<Building className="h-5 w-5" />} 
                    value={formA.company}
                    onChange={(e) => setFormA({...formA, company: e.target.value})}
                    error={!!errorsA.company}
                  />
                  {errorsA.company && <p className="text-red-500 text-xs mt-1.5 ml-2">{errorsA.company}</p>}
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Email Address" 
                    icon={<Mail className="h-5 w-5" />} 
                    value={formA.email}
                    onChange={(e) => setFormA({...formA, email: e.target.value})}
                    error={!!errorsA.email}
                  />
                  {errorsA.email && <p className="text-red-500 text-xs mt-1.5 ml-2">{errorsA.email}</p>}
                </div>
                <div>
                  <Input 
                    placeholder="Phone Number" 
                    icon={<Phone className="h-5 w-5" />} 
                    value={formA.phone}
                    onChange={(e) => setFormA({...formA, phone: e.target.value})}
                    error={!!errorsA.phone}
                  />
                  {errorsA.phone && <p className="text-red-500 text-xs mt-1.5 ml-2">{errorsA.phone}</p>}
                </div>
              </div>

              <div>
                <Select 
                  icon={<Briefcase className="h-5 w-5" />}
                  value={formA.service}
                  onChange={(e) => setFormA({...formA, service: e.target.value})}
                  error={!!errorsA.service}
                >
                  <option value="" disabled>Service Interested In</option>
                  <option value="gifting">Corporate Gifting</option>
                  <option value="apparel">Corporate Apparel & Uniforms</option>
                  <option value="merchandise">Promotional Merchandise</option>
                  <option value="exhibition">Exhibition Promotional Collaterals</option>
                </Select>
                {errorsA.service && <p className="text-red-500 text-xs mt-1.5 ml-2">{errorsA.service}</p>}
              </div>

              <Textarea 
                placeholder="Message or specific requirements (optional)"
                className="min-h-[140px]"
                value={formA.message}
                onChange={(e) => setFormA({...formA, message: e.target.value})}
              />

              <Button type="submit" variant="primary" size="lg" className="w-full h-14 text-base mt-2">
                Submit Enquiry
              </Button>
              {successA && <p className="text-green-600 text-sm text-center font-medium">Thank you! We'll be in touch shortly.</p>}
            </form>
          </motion.div>

          {/* CARD B: Request a Proposal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-charcoal p-8 md:p-10 rounded-[2rem] border border-neutral-800 shadow-xl text-white"
          >
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-3">Request a Proposal</h3>
                <p className="text-neutral-400 font-body text-sm">Share your project details and our team will prepare a customized solution.</p>
              </div>
              <div className="font-accent text-sm font-bold text-brand-orange whitespace-nowrap bg-brand-orange/10 px-4 py-2 rounded-full border border-brand-orange/20">
                Step {wizardStep} of 2
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
              <div 
                className="bg-brand-orange h-full transition-all duration-500 ease-out" 
                style={{ width: wizardStep === 1 ? '50%' : '100%' }}
              />
            </div>

            <form onSubmit={handleSubmitB} className="space-y-8 relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {wizardStep === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 absolute inset-x-0 top-0"
                  >
                    {/* Section 1: Contact Info */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-accent tracking-widest text-brand-orange uppercase mb-3 border-b border-white/10 pb-2">Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input 
                            placeholder="Full Name" 
                            className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-brand-orange" 
                            icon={<User className="h-5 w-5 text-neutral-400" />} 
                            value={formB.name} onChange={(e) => setFormB({...formB, name: e.target.value})}
                            error={!!errorsB.name}
                          />
                          {errorsB.name && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.name}</p>}
                        </div>
                        <div>
                          <Input 
                            placeholder="Company Name" 
                            className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-brand-orange" 
                            icon={<Building className="h-5 w-5 text-neutral-400" />} 
                            value={formB.company} onChange={(e) => setFormB({...formB, company: e.target.value})}
                            error={!!errorsB.company}
                          />
                          {errorsB.company && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.company}</p>}
                        </div>
                        <Input 
                          placeholder="Designation" 
                          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-brand-orange" 
                          icon={<FileBadge className="h-5 w-5 text-neutral-400" />} 
                          value={formB.designation} onChange={(e) => setFormB({...formB, designation: e.target.value})}
                        />
                        <div>
                          <Input 
                            placeholder="Phone Number" 
                            className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-brand-orange" 
                            icon={<Phone className="h-5 w-5 text-neutral-400" />} 
                            value={formB.phone} onChange={(e) => setFormB({...formB, phone: e.target.value})}
                            error={!!errorsB.phone}
                          />
                          {errorsB.phone && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.phone}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Project Details (Checkboxes) */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-accent tracking-widest text-brand-orange uppercase mb-3 border-b border-white/10 pb-2">Project Details</h4>
                      {errorsB.services && <p className="text-red-400 text-xs mb-2">{errorsB.services}</p>}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Checkbox 
                          label="Corporate Gifting Program" 
                          className="border-neutral-500 bg-white/5 checked:bg-brand-orange checked:border-brand-orange"
                          checked={checkboxesB.gifting} onChange={(e) => setCheckboxesB({...checkboxesB, gifting: e.target.checked})}
                        />
                        <Checkbox 
                          label="Corporate Apparel/Uniforms" 
                          className="border-neutral-500 bg-white/5 checked:bg-brand-orange checked:border-brand-orange"
                          checked={checkboxesB.apparel} onChange={(e) => setCheckboxesB({...checkboxesB, apparel: e.target.checked})}
                        />
                        <Checkbox 
                          label="Promotional Merchandise" 
                          className="border-neutral-500 bg-white/5 checked:bg-brand-orange checked:border-brand-orange"
                          checked={checkboxesB.merchandise} onChange={(e) => setCheckboxesB({...checkboxesB, merchandise: e.target.checked})}
                        />
                        <Checkbox 
                          label="Exhibition/Promotional" 
                          className="border-neutral-500 bg-white/5 checked:bg-brand-orange checked:border-brand-orange"
                          checked={checkboxesB.exhibition} onChange={(e) => setCheckboxesB({...checkboxesB, exhibition: e.target.checked})}
                        />
                        <Checkbox 
                          label="Employee Welcome Kits" 
                          className="border-neutral-500 bg-white/5 checked:bg-brand-orange checked:border-brand-orange"
                          checked={checkboxesB.welcomeKits} onChange={(e) => setCheckboxesB({...checkboxesB, welcomeKits: e.target.checked})}
                        />
                        <Checkbox 
                          label="Corporate Events" 
                          className="border-neutral-500 bg-white/5 checked:bg-brand-orange checked:border-brand-orange"
                          checked={checkboxesB.events} onChange={(e) => setCheckboxesB({...checkboxesB, events: e.target.checked})}
                        />
                      </div>
                    </div>
                    
                    <Button type="button" onClick={handleNextStep} variant="primary" size="lg" className="w-full h-14 text-base mt-4 shadow-lg shadow-brand-orange/20">
                      Continue to Next Step
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 absolute inset-x-0 top-0"
                  >
                    {/* Section 3: Project Information */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-accent tracking-widest text-brand-orange uppercase mb-3 border-b border-white/10 pb-2">Project Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Select 
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-orange" 
                            icon={<Target className="h-5 w-5 text-neutral-400" />}
                            value={formB.objective} onChange={(e) => setFormB({...formB, objective: e.target.value})}
                            error={!!errorsB.objective}
                          >
                            <option value="" disabled className="text-brand-dark">Project Objective</option>
                            <option value="brand_awareness" className="text-brand-dark">Brand Awareness</option>
                            <option value="employee_engagement" className="text-brand-dark">Employee Engagement</option>
                            <option value="client_retention" className="text-brand-dark">Client Retention/Appreciation</option>
                            <option value="lead_generation" className="text-brand-dark">Event/Lead Generation</option>
                          </Select>
                          {errorsB.objective && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.objective}</p>}
                        </div>
                        <div>
                          <Select 
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-orange" 
                            icon={<Hash className="h-5 w-5 text-neutral-400" />}
                            value={formB.quantity} onChange={(e) => setFormB({...formB, quantity: e.target.value})}
                            error={!!errorsB.quantity}
                          >
                            <option value="" disabled className="text-brand-dark">Estimated Quantity</option>
                            <option value="50-100" className="text-brand-dark">50 - 100</option>
                            <option value="100-500" className="text-brand-dark">100 - 500</option>
                            <option value="500-1000" className="text-brand-dark">500 - 1000</option>
                            <option value="1000+" className="text-brand-dark">1000+</option>
                          </Select>
                          {errorsB.quantity && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.quantity}</p>}
                        </div>
                        <div>
                          <Select 
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-orange" 
                            icon={<IndianRupee className="h-5 w-5 text-neutral-400" />}
                            value={formB.budget} onChange={(e) => setFormB({...formB, budget: e.target.value})}
                            error={!!errorsB.budget}
                          >
                            <option value="" disabled className="text-brand-dark">Estimated Budget</option>
                            <option value="below_50k" className="text-brand-dark">Below ₹50,000</option>
                            <option value="50k_2l" className="text-brand-dark">₹50,000 - ₹2,00,000</option>
                            <option value="2l_5l" className="text-brand-dark">₹2,00,000 - ₹5,00,000</option>
                            <option value="above_5l" className="text-brand-dark">Above ₹5,00,000</option>
                          </Select>
                          {errorsB.budget && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.budget}</p>}
                        </div>
                        <div>
                          <Select 
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-orange" 
                            icon={<Calendar className="h-5 w-5 text-neutral-400" />}
                            value={formB.timeline} onChange={(e) => setFormB({...formB, timeline: e.target.value})}
                            error={!!errorsB.timeline}
                          >
                            <option value="" disabled className="text-brand-dark">Project Timeline</option>
                            <option value="1-2_weeks" className="text-brand-dark">Urgent (1-2 weeks)</option>
                            <option value="1_month" className="text-brand-dark">Within 1 month</option>
                            <option value="1-3_months" className="text-brand-dark">1 - 3 months</option>
                            <option value="planning" className="text-brand-dark">Planning stage</option>
                          </Select>
                          {errorsB.timeline && <p className="text-red-400 text-xs mt-1.5 ml-2">{errorsB.timeline}</p>}
                        </div>
                      </div>
                      
                      {/* File Upload UI */}
                      <div className="mt-6 border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-orange/50 hover:bg-white/5 transition-all cursor-pointer">
                        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-3 text-neutral-400">
                          <UploadCloud className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium text-white mb-1">Upload reference files</p>
                        <p className="text-xs text-neutral-400 font-body">Drag and drop or click to browse (e.g. logos, designs)</p>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="button" onClick={() => setWizardStep(1)} variant="outline" className="w-1/3 h-14 text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
                        Back
                      </Button>
                      <Button type="submit" variant="primary" size="lg" className="w-2/3 h-14 text-base shadow-lg shadow-brand-orange/20">
                        Request Proposal
                      </Button>
                    </div>
                    {successB && <p className="text-brand-orange text-sm text-center font-medium">Thank you! Your proposal request has been received.</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </section>

      {/* 3. Contact Details & Map */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Details Block */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-sans font-bold text-brand-dark mb-4">Contact Information</h3>
              <p className="text-neutral-600 font-body text-lg">We'd love to hear from you. Reach out through any of the channels below.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-brand-dark mb-1">Corporate Office</h4>
                  <p className="text-neutral-600 font-body leading-relaxed">New Delhi – 110059, India</p>
                  <p className="text-sm text-neutral-400 mt-1 italic">Factory/Workshop Location details upon request.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-brand-dark mb-1">Email Address</h4>
                  <a href="mailto:info@promaxifymarketing.com" className="text-neutral-600 font-body hover:text-brand-orange transition-colors">
                    info@promaxifymarketing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-brand-dark mb-1">Phone Number</h4>
                  <a href="tel:+910000000000" className="text-neutral-600 font-body hover:text-brand-orange transition-colors">
                    +91-XXXXXXXXXX
                  </a>
                  <p className="text-xs text-neutral-400 mt-1">Available Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <h4 className="font-sans font-semibold text-brand-dark mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="h-12 w-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-12 w-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-12 w-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-full min-h-[500px] bg-neutral-100 rounded-[2.5rem] border-2 border-neutral-200 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* TODO: embed Google Maps iframe with client's confirmed address */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-multiply" />
            <div className="h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-orange mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
              <MapPin className="h-8 w-8" />
              <div className="absolute -bottom-2 w-4 h-4 bg-brand-orange rounded-full animate-ping opacity-75" />
            </div>
            <p className="font-sans font-bold text-xl text-neutral-400 relative z-10">Map View</p>
            <p className="text-neutral-400 font-body text-sm relative z-10 mt-2">New Delhi, India</p>
          </div>
          
        </div>
      </section>

    </div>
  );
}
