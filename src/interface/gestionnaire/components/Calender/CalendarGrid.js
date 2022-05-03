import React from "react";
import moment from "moment";
import "moment/locale/fr";
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.isHeader ? '#1E1F21' : '#4D4C4D'};
	${props => props.isHeader && `border-bottom: 2px solid #4D4C4D`}
`;

const CellWrapper = styled.div`
	min-height: ${props => props.isHeader ? 30 : 70}px;
	min-width: 50px;
	background-color: ${props => props.isWeekday ? '#27282A' : '#1E1F21'};
	color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;

const RowInCell = styled.div`
	display: flex;
	flex-direction: column;
    font-size:18px;text-align:center;
`;

const DayWrapper = styled.div`
  height: 50px;	
  width: 50px;
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
;`

const CurrentDay = styled('div')`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowDayWrapper = styled('div')`
	display: flex;
	justify-content: flex-end;
`;

const EventListWrapper = styled('ul')`
	margin: unset;
	list-style-position: inside;
	padding-left: 4px;
`;

const EventItemWrapper = styled('button')`
	position: relative;
	left: -14px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: 114px;
	border: unset;
	background: unset;
	color: #DDDDDD;
	cursor: pointer;
	margin: 0;
	padding: 0;
	text-align: left;
`;

const CalendarGrid = ({startDay, today, totalDays, events, openFormHandler}) => {
	const day = startDay.clone().subtract(1, 'day');
	const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())

  const isCurrentDay = (day) => moment().isSame(day, 'day');
	const isSelectedMonth = (day) => today.isSame(day, 'month');
	// console.log(daysMap)
	return (
		<>
			<GridWrapper isHeader>
				{
					[...Array(7)].map((_, i) => (
						<CellWrapper isHeader isSelectedMonth key={i}>
							<RowInCell justifyContent={'flex-end'} pr={1} style={{border:"2px solid green"}}>
								{moment().day(i+1).locale("fr").format('dddd')}
							</RowInCell>
						</CellWrapper>
					))
				}
			</GridWrapper>
			<GridWrapper>
				{
					daysMap.map((dayItem) => (
						<CellWrapper
							isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
							key={dayItem.unix()}
							isSelectedMonth={isSelectedMonth(dayItem)}
						>
							<RowInCell justifyContent={'flex-end'}  style={{border:"2px solid green"}}>
								<ShowDayWrapper>
									<DayWrapper onDoubleClick={() => openFormHandler('Create')}>
										{
											isCurrentDay(dayItem) ? (
												<CurrentDay>{dayItem.format('D')}</CurrentDay>
											) : (
												dayItem.format('D')
											)
										}
									</DayWrapper>
								</ShowDayWrapper>
								<EventListWrapper>
									{
										events
											.filter(event => event.date >= dayItem.format('X') && event.date <= dayItem.clone().endOf('day').format('X'))
											.map(event => (
												<li key={event.id}>
													<EventItemWrapper onDoubleClick={() => openFormHandler('Update', event)} >
														{event.title}
													</EventItemWrapper>
												</li>
											))
									}
								</EventListWrapper>
							</RowInCell>
						</CellWrapper>
					))
				}
			</GridWrapper>
		</>
	);
};

export { CalendarGrid };
