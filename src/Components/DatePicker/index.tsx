import  { useState } from 'react';
import { CloseButton, DatePickerContainer, DatePickerDropdown, 
    DatePickerToggle, DayButton, DayCell, 
    DaysGrid, Footer, MonthText, MonthYearDisplay,
    NavigationButton, NavigationGroup, NavigationHeader, 
    SelectedDateText, StyledCalendar,
    StyledChevronLeft, StyledChevronRight, 
    TodayButton, WeekDay, 
    WeekDaysGrid, YearText } from './styles';

interface DatePickerProps {
  onDateSelect(date: Date | undefined): void;
  selectedDate: Date | undefined;
}

const DatePicker = ({ onDateSelect, selectedDate }: DatePickerProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const navigateYear = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(currentDate.getFullYear() + direction);
    setCurrentDate(newDate);
  };

  const handleDateSelect = (date: Date) => {
    onDateSelect(date);
    setIsOpen(false);
  };

  const isSelectedDate = (date: Date) => {
    if (!selectedDate || !date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date: Date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const formatDate = (date?: Date) => {
    if (!date) return 'Select a date';
    return date.toLocaleDateString('en-US');
  };

  const days = getDaysInMonth(currentDate);

  return (
    <DatePickerContainer>
      <DatePickerToggle onClick={() => setIsOpen(!isOpen)}>
        <SelectedDateText $hasSelectedDate={!!selectedDate}>
          {formatDate(selectedDate)}
        </SelectedDateText>
        <StyledCalendar />
      </DatePickerToggle>

      {isOpen && (
        <DatePickerDropdown>
          <NavigationHeader>
            <NavigationGroup>
              <NavigationButton onClick={() => navigateYear(-1)}>
                <StyledChevronLeft />
              </NavigationButton>
              <NavigationButton onClick={() => navigateMonth(-1)}>
                <StyledChevronLeft />
              </NavigationButton>
            </NavigationGroup>

            <MonthYearDisplay>
              <MonthText>
                {months[currentDate.getMonth()]}
              </MonthText>
              <YearText>
                {currentDate.getFullYear()}
              </YearText>
            </MonthYearDisplay>

            <NavigationGroup>
              <NavigationButton onClick={() => navigateMonth(1)}>
                <StyledChevronRight />
              </NavigationButton>
              <NavigationButton onClick={() => navigateYear(1)}>
                <StyledChevronRight />
              </NavigationButton>
            </NavigationGroup>
          </NavigationHeader>

          <WeekDaysGrid>
            {weekDays.map((day) => (
              <WeekDay key={day}>
                {day}
              </WeekDay>
            ))}
          </WeekDaysGrid>

          <DaysGrid>
            {days.map((date, index) => (
              <DayCell key={index}>
                {date && (
                  <DayButton
                    onClick={() => handleDateSelect(date)}
                    $isSelected={isSelectedDate(date)}
                    $isToday={isToday(date)}
                  >
                    {date.getDate()}
                  </DayButton>
                )}
              </DayCell>
            ))}
          </DaysGrid>

          <Footer>
            <TodayButton onClick={() => handleDateSelect(new Date())}>
              Hoje
            </TodayButton>
            <CloseButton onClick={() => setIsOpen(false)}>
              Fechar
            </CloseButton>
          </Footer>
        </DatePickerDropdown>
      )}
    </DatePickerContainer>
  );
};

export default DatePicker;

