import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, Check, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    demoType: "",
    notes: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeSlots = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: Array<{ day: number; isCurrentMonth: boolean; date: Date; isPast: boolean; isWeekend: boolean; isToday: boolean }> = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const dateObj = new Date(year, month - 1, day);
      days.push({
        day,
        isCurrentMonth: false,
        date: dateObj,
        isPast: dateObj < today,
        isWeekend: dateObj.getDay() === 0 || dateObj.getDay() === 6,
        isToday: false,
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      const isToday = dateObj.getTime() === today.getTime();
      days.push({
        day,
        isCurrentMonth: true,
        date: dateObj,
        isPast: dateObj < today,
        isWeekend: dateObj.getDay() === 0 || dateObj.getDay() === 6,
        isToday,
      });
    }

    // Next month days to fill grid
    const totalCells = 42;
    const currentCells = firstDay + daysInMonth;
    for (let day = 1; day <= totalCells - currentCells; day++) {
      const dateObj = new Date(year, month + 1, day);
      days.push({
        day,
        isCurrentMonth: false,
        date: dateObj,
        isPast: false,
        isWeekend: dateObj.getDay() === 0 || dateObj.getDay() === 6,
        isToday: false,
      });
    }

    return days;
  };

  const changeMonth = (delta: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
  };

  const handleDateSelect = (date: Date, isCurrentMonth: boolean) => {
    // If selecting a date from next month, switch to that month
    if (!isCurrentMonth && date > today) {
      setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
      // Small delay to allow calendar to re-render, then select the date
      setTimeout(() => {
        setSelectedDate(date);
        setSelectedTime(null);
      }, 0);
      return;
    }
    
    // Disable past dates and weekends
    if (date < today || date.getDay() === 0 || date.getDay() === 6) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${hour12}:${minutes} ${period}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isFormValid = () => {
    return (
      selectedDate &&
      selectedTime &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.demoType
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    console.log("Appointment booked:", {
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });

    setShowSuccess(true);
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="relative bg-background min-h-[calc(100vh-64px)]">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-success bg-clip-text text-transparent">
              Book an Appointment
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a personalized demo with our Vision AI experts and discover how iolaire.ai can transform your operations.
            </p>
          </div>

          {/* Calendar & Form Container */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar Widget */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-heading font-semibold text-foreground">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => changeMonth(-1)}
                    className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-105 transition-all flex items-center justify-center"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => changeMonth(1)}
                    className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-105 transition-all flex items-center justify-center"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-5">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-semibold text-muted-foreground py-2 uppercase tracking-wider"
                  >
                    {day}
                  </div>
                ))}
                {days.map((dayInfo, idx) => {
                  const isSelected =
                    selectedDate &&
                    selectedDate.getTime() === dayInfo.date.getTime();
                  const isNextMonthFuture = !dayInfo.isCurrentMonth && dayInfo.date > today && !dayInfo.isWeekend;
                  const isClickable = dayInfo.isCurrentMonth 
                    ? !dayInfo.isPast && !dayInfo.isWeekend
                    : isNextMonthFuture;
                  
                  return (
                    <div
                      key={idx}
                      onClick={() => handleDateSelect(dayInfo.date, dayInfo.isCurrentMonth)}
                      className={`
                        aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all
                        ${
                          !isClickable
                            ? "text-muted-foreground/30 cursor-not-allowed"
                            : dayInfo.isToday
                            ? "bg-success/15 border-2 border-success/50 text-success font-semibold cursor-pointer hover:bg-success/25"
                            : isSelected
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40 cursor-pointer scale-105"
                            : !dayInfo.isCurrentMonth && isNextMonthFuture
                            ? "text-foreground/60 hover:bg-primary/10 hover:text-primary cursor-pointer hover:scale-105"
                            : "text-foreground hover:bg-primary/10 hover:text-primary cursor-pointer hover:scale-105"
                        }
                      `}
                    >
                      {dayInfo.day}
                    </div>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div className="pt-5 border-t border-border">
                <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Select a Time
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          py-2.5 px-3 rounded-xl text-sm font-medium transition-all text-center
                          ${
                            isSelected
                              ? "bg-success text-success-foreground shadow-lg shadow-success/40 scale-105"
                              : "bg-background border border-border text-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:scale-105"
                          }
                        `}
                      >
                        {formatTime(time)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {!showSuccess ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Your Details
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Please fill in your information to confirm the appointment.
                    </p>
                  </div>

                  {/* Selected Date/Time Display */}
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-success/10 border border-primary/20 rounded-xl p-4 mb-6 flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-md">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      {selectedDate && selectedTime ? (
                        <>
                          <div className="font-semibold text-foreground text-sm truncate">{formatDate(selectedDate)}</div>
                          <div className="text-sm text-muted-foreground mt-1">{formatTime(selectedTime)}</div>
                        </>
                      ) : selectedDate ? (
                        <>
                          <div className="font-semibold text-foreground text-sm truncate">{formatDate(selectedDate)}</div>
                          <div className="text-sm text-muted-foreground mt-1">Please select a time</div>
                        </>
                      ) : (
                        <div className="text-sm text-muted-foreground italic">Please select a date and time</div>
                      )}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="john.doe@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Demo Type *
                      </label>
                      <select
                        required
                        value={formData.demoType}
                        onChange={(e) => setFormData({ ...formData, demoType: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22 fill=%22none%22%3E%3Cpath d=%22M3 4.5L6 7.5L9 4.5%22 stroke=%22%236b7280%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] pr-10"
                      >
                        <option value="">Select a demo type</option>
                        <option value="alpr">ALPR Platform Demo</option>
                        <option value="adtech">AdTech Platform Demo</option>
                        <option value="retail">Retail Solutions Demo</option>
                        <option value="safety">Safety Enforcement Demo</option>
                        <option value="custom">Custom Solution Discussion</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none min-h-[100px]"
                        placeholder="Tell us about your specific needs or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid()}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 text-base shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Confirm Appointment
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                    <Check className="h-10 w-10 text-success-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Appointment Confirmed!
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    We've sent a confirmation email with the meeting details. Our team will reach out shortly.
                  </p>
                  <Link href="/">
                    <Button variant="outline" className="rounded-xl">
                      <Home className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
