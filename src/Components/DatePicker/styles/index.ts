import styled from "styled-components";
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export const DatePickerContainer = styled.div`
  position: relative;
`;

export const DatePickerToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem; 
  border: 1px solid #d1d5db; 
  border-radius: 0.5rem; 
  cursor: pointer;
  transition-property: border-color; 
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;

  &:hover {
    border-color: #3b82f6; 
`;

export interface SelectedDateTextProps {
  $hasSelectedDate: boolean;
}

export const SelectedDateText = styled.span<SelectedDateTextProps>`
  color: ${props => props.$hasSelectedDate ? '#1f2937' : '#6b7280'}; 
`;

export const StyledCalendar = styled(Calendar)`
  height: 1.25rem; 
  width: 1.25rem; 
  color: #9ca3af; 
`;

export const DatePickerDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem; 
  background-color: #fff; 
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem; 
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
  z-index: 50; 
  width: 20rem; 
`;

export const NavigationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem; 
  border-bottom: 1px solid #e5e7eb; 
`;

export const NavigationGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
`;

export const NavigationButton = styled.button`
  padding: 0.25rem; 
  border-radius: 0.25rem; 
  &:hover {
    background-color: #f3f4f6; 
  }
`;

export const StyledChevronLeft = styled(ChevronLeft)`
  height: 1rem; 
  width: 1rem; 
`;

export const StyledChevronRight = styled(ChevronRight)`
  height: 1rem; 
  width: 1rem; 
`;

export const MonthYearDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonthText = styled.span`
  font-size: 1.125rem; 
  font-weight: 600; 
  color: #1f2937; 
`;

export const YearText = styled.span`
  font-size: 0.875rem; 
  color: #4b5563; 
`;

export const WeekDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr)); 
  gap: 0.25rem; 
  padding: 0.5rem; 
`;

export const WeekDay = styled.div`
  height: 2rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem; 
  font-weight: 500; 
  color: #6b7280;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr)); 
  gap: 0.25rem; 
  padding: 0.5rem;
`;

export const DayCell = styled.div`
  height: 2rem; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface DayButtonProps {
  $isSelected: boolean;
  $isToday: boolean;
}

export const DayButton = styled.button<DayButtonProps>`
  height: 2rem; 
  width: 2rem; 
  border-radius: 9999px; 
  font-size: 0.875rem; 
  font-weight: 500; 
  transition-property: background-color, color; 
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${props => props.$isSelected
    ? `
      background-color: #3b82f6; 
      color: #fff; 
    `
    : props.$isToday
    ? `
      background-color: #dbeafe; 
    `
    : `
      color: #374151; 
      &:hover {
        background-color: #f3f4f6; 
      }
    `
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #e5e7eb; 
`;

export const TodayButton = styled.button`
  font-size: 0.875rem; 
  color: #2563eb; 
  &:hover {
    color: #1e40af; 
  }
  font-weight: 500; 
`;

export const CloseButton = styled.button`
  font-size: 0.875rem; 
  color: #4b5563;
  &:hover {
    color: #374151; 
  }
`;