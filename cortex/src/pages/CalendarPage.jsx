import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight, Grid, List, Users } from 'lucide-react'
import { FuturisticCard } from '../components/ui-components/futuristic-card.jsx'
import { GlassPanel } from '../components/ui-components/glass-panel.jsx'
import { GradientButton } from '../components/ui-components/gradient-button.jsx'
import { GradientText } from '../components/ui-components/gradient-text.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Sample calendar data - expanded from the Personal OS component
const meetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    time: "10:00 AM - 11:00 AM",
    date: "2025-05-12",
    participants: ["Sarah Johnson", "Mike Chen", "Alex Rodriguez", "Emma Wilson"],
    location: "Conference Room A",
    description: "Review sprint progress, discuss blockers, and plan for the upcoming sprint.",
    category: "Team",
    conflict: false,
  },
  {
    id: 2,
    title: "Product Review",
    time: "1:30 PM - 2:30 PM",
    date: "2025-05-12",
    participants: ["Product Team", "Design Team", "Engineering Leads"],
    location: "Zoom Meeting",
    description: "Review the latest product designs and provide feedback before development begins.",
    category: "Product",
    conflict: false,
  },
  {
    id: 3,
    title: "Client Call: Acme Inc",
    time: "4:00 PM - 4:30 PM",
    date: "2025-05-12",
    participants: ["John Smith", "Client Team", "Sales Director"],
    location: "Phone Call",
    description: "Discuss project timeline and deliverables with the client.",
    category: "Client",
    conflict: true,
    conflictWith: "Marketing Strategy Session",
  },
  {
    id: 4,
    title: "AI Platform Architecture Review",
    time: "9:00 AM - 10:30 AM",
    date: "2025-05-13",
    participants: ["Tech Lead", "AI Engineers", "Product Manager"],
    location: "Conference Room B",
    description: "Deep dive into the AI platform architecture and discuss optimization strategies.",
    category: "Technical",
    conflict: false,
  },
  {
    id: 5,
    title: "Quarterly Planning",
    time: "11:00 AM - 1:00 PM",
    date: "2025-05-14",
    participants: ["Executive Team", "Department Heads"],
    location: "Main Conference Room",
    description: "Review Q2 results and plan objectives for Q3.",
    category: "Planning",
    conflict: false,
  },
  {
    id: 6,
    title: "User Research Session",
    time: "2:00 PM - 3:30 PM",
    date: "2025-05-14",
    participants: ["UX Researcher", "Product Designer", "User Participants"],
    location: "Research Lab",
    description: "Conduct user testing for the new dashboard interface.",
    category: "Research",
    conflict: false,
  },
  {
    id: 7,
    title: "Engineering All-Hands",
    time: "10:00 AM - 11:00 AM",
    date: "2025-05-15",
    participants: ["CTO", "Engineering Team"],
    location: "Auditorium",
    description: "Monthly engineering all-hands meeting to discuss department updates and technical roadmap.",
    category: "Team",
    conflict: false,
  },
]

// Sample calendar days for the month view
const generateCalendarDays = () => {
  const days = [];
  const today = new Date(2025, 4, 12); // May 12, 2025
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  // Add days from previous month to fill the first week
  const firstDayOfWeek = firstDayOfMonth.getDay();
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(firstDayOfMonth);
    date.setDate(date.getDate() - i - 1);
    days.push({
      date,
      isCurrentMonth: false,
      events: []
    });
  }
  
  // Add days of current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    const dayEvents = meetings.filter(meeting => {
      const meetingDate = new Date(meeting.date);
      return meetingDate.getDate() === i && 
             meetingDate.getMonth() === date.getMonth() && 
             meetingDate.getFullYear() === date.getFullYear();
    });
    
    days.push({
      date,
      isCurrentMonth: true,
      isToday: i === today.getDate(),
      events: dayEvents
    });
  }
  
  // Add days from next month to complete the grid
  const remainingDays = 42 - days.length; // 6 rows of 7 days
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(lastDayOfMonth);
    date.setDate(date.getDate() + i);
    days.push({
      date,
      isCurrentMonth: false,
      events: []
    });
  }
  
  return days;
};

const calendarDays = generateCalendarDays();

// Categories with colors
const categories = [
  { name: "Team", color: "bg-blue-500" },
  { name: "Product", color: "bg-purple-500" },
  { name: "Client", color: "bg-green-500" },
  { name: "Technical", color: "bg-yellow-500" },
  { name: "Planning", color: "bg-pink-500" },
  { name: "Research", color: "bg-cyan-500" },
];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 4, 12)); // May 12, 2025
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState("week");
  
  const monthName = selectedDate.toLocaleString('default', { month: 'long' });
  const year = selectedDate.getFullYear();
  
  const handlePrevMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setSelectedDate(newDate);
  };
  
  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setSelectedDate(newDate);
  };
  
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };
  
  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "bg-gray-500";
  };
  
  // Filter events for the selected date in day view
  const dayEvents = meetings.filter(meeting => {
    const meetingDate = new Date(meeting.date);
    return meetingDate.toDateString() === selectedDate.toDateString();
  });
  
  // Get current week dates for week view
  const getWeekDates = () => {
    const dates = [];
    const currentDay = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Get the first day of the week (Sunday)
    const firstDayOfWeek = new Date(selectedDate);
    firstDayOfWeek.setDate(selectedDate.getDate() - currentDay);
    
    // Generate 7 days starting from Sunday
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      
      const dayEvents = meetings.filter(meeting => {
        const meetingDate = new Date(meeting.date);
        return meetingDate.toDateString() === date.toDateString();
      });
      
      dates.push({
        date,
        events: dayEvents,
        isToday: date.toDateString() === new Date(2025, 4, 12).toDateString()
      });
    }
    
    return dates;
  };
  
  const weekDates = getWeekDates();
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-cyan-400" />
            <GradientText text="Calendar" from="cyan" to="purple" />
          </h1>
          <p className="text-gray-400">Manage your schedule and meetings</p>
        </div>
        
        <div className="flex items-center gap-4">
          <GradientButton onClick={() => {}} from="cyan" to="purple">
            <Plus className="h-4 w-4 mr-1" /> New Event
          </GradientButton>
          
          <div className="flex items-center bg-gray-800/50 rounded-lg p-1">
            <button 
              className={`px-3 py-1 rounded-md ${view === 'month' ? 'bg-gray-700' : ''}`}
              onClick={() => setView('month')}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button 
              className={`px-3 py-1 rounded-md ${view === 'week' ? 'bg-gray-700' : ''}`}
              onClick={() => setView('week')}
            >
              <Calendar className="h-4 w-4" />
            </button>
            <button 
              className={`px-3 py-1 rounded-md ${view === 'day' ? 'bg-gray-700' : ''}`}
              onClick={() => setView('day')}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevMonth}
            className="p-1 rounded-full hover:bg-gray-800"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <h2 className="text-xl font-semibold">
            {monthName} {year}
          </h2>
          
          <button 
            onClick={handleNextMonth}
            className="p-1 rounded-full hover:bg-gray-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex gap-2">
          {categories.map(category => (
            <div key={category.name} className="flex items-center gap-1 text-xs">
              <div className={`w-2 h-2 rounded-full ${category.color}`}></div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${selectedEvent ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <FuturisticCard glowColor="cyan">
            <Tabs defaultValue={view} value={view} onValueChange={setView} className="w-full">
              <TabsContent value="month" className="mt-0">
                <div className="grid grid-cols-7 gap-px bg-gray-700/20">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center py-2 text-sm font-medium text-gray-400">
                      {day}
                    </div>
                  ))}
                  
                  {calendarDays.map((day, index) => (
                    <div 
                      key={index}
                      className={`min-h-[100px] p-1 border border-gray-800/50 ${
                        day.isCurrentMonth ? 'bg-gray-800/30' : 'bg-gray-800/10 text-gray-500'
                      } ${day.isToday ? 'ring-1 ring-cyan-500' : ''}`}
                      onClick={() => setSelectedDate(day.date)}
                    >
                      <div className="text-xs p-1">
                        {day.date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {day.events.slice(0, 3).map(event => (
                          <div 
                            key={event.id}
                            className={`text-xs px-1 py-0.5 rounded truncate ${
                              getCategoryColor(event.category)
                            } bg-opacity-20 cursor-pointer`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEventClick(event);
                            }}
                          >
                            {event.time.split(' - ')[0]} {event.title}
                          </div>
                        ))}
                        {day.events.length > 3 && (
                          <div className="text-xs text-gray-400 px-1">
                            +{day.events.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="week" className="mt-0">
                <div className="grid grid-cols-7 gap-px bg-gray-700/20">
                  {weekDates.map((day, index) => (
                    <div key={index} className="text-center py-2 text-sm font-medium text-gray-400">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
                      <div className={`text-xs mt-1 ${day.isToday ? 'text-cyan-400 font-bold' : ''}`}>
                        {day.date.getDate()}
                      </div>
                    </div>
                  ))}
                  
                  {weekDates.map((day, index) => (
                    <div 
                      key={index}
                      className={`min-h-[300px] p-1 border border-gray-800/50 ${
                        day.isToday ? 'bg-gray-800/40 ring-1 ring-cyan-500' : 'bg-gray-800/30'
                      }`}
                    >
                      <div className="space-y-1">
                        {day.events.map(event => (
                          <motion.div 
                            key={event.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`text-xs p-2 rounded ${
                              getCategoryColor(event.category)
                            } bg-opacity-20 cursor-pointer`}
                            onClick={() => handleEventClick(event)}
                          >
                            <div className="font-medium">{event.title}</div>
                            <div className="text-gray-400">{event.time}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day" className="mt-0">
                <div className="flex flex-col">
                  <div className="text-center py-4 border-b border-gray-800">
                    <div className="text-lg font-medium">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <div className="space-y-4 py-4">
                    {dayEvents.length > 0 ? (
                      dayEvents.map(event => (
                        <motion.div 
                          key={event.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`p-3 rounded-lg cursor-pointer ${
                            event.conflict ? 'bg-red-900/20 border border-red-500/30' : 'bg-gray-800/50'
                          }`}
                          onClick={() => handleEventClick(event)}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <div className="font-medium">{event.title}</div>
                            <div className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColor(event.category)} bg-opacity-30`}>
                              {event.category}
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 mb-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {event.time}
                          </div>
                          <div className="text-sm text-gray-400 mb-1">Location: {event.location}</div>
                          <div className="text-sm text-gray-400 mb-2">{event.description}</div>
                          
                          <div className="flex items-center gap-1 mt-2">
                            <Users className="h-3 w-3 text-gray-400" />
                            <div className="text-xs text-gray-400">
                              {event.participants.length} participants
                            </div>
                          </div>

                          {event.conflict && (
                            <div className="mt-2 text-xs text-red-400">
                              Conflicts with: {event.conflictWith}
                            </div>
                          )}
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-400">
                        No events scheduled for this day
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </FuturisticCard>
        </div>
        
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-1"
          >
            <GlassPanel className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
                <div 
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    getCategoryColor(selectedEvent.category)
                  } bg-opacity-30`}
                >
                  {selectedEvent.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Date & Time</div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                    {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm mt-1">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                    {selectedEvent.time}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Location</div>
                  <div className="text-sm">{selectedEvent.location}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Description</div>
                  <div className="text-sm">{selectedEvent.description}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Participants</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedEvent.participants.map((participant, index) => (
                      <div 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                      >
                        {participant}
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedEvent.conflict && (
                  <div className="p-3 rounded-lg bg-red-900/20 border border-red-500/30">
                    <div className="text-sm text-red-400 font-medium">Scheduling Conflict</div>
                    <div className="text-sm mt-1">
                      This meeting conflicts with "{selectedEvent.conflictWith}"
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-4">
                  <GradientButton size="sm" from="cyan" to="blue">
                    Edit Event
                  </GradientButton>
                  <button className="px-3 py-1 text-sm rounded-md bg-gray-800 hover:bg-gray-700">
                    Cancel
                  </button>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        )}
      </div>
    </div>
  )
}
