import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { Container, Settings, CountdownContainer, Button,TimeLeft, Input, TopTitle, BottomTitle } from './styles';
import { addMinutes, addSeconds, differenceInMinutes, differenceInSeconds, formatDistance, intervalToDuration, isAfter, parseISO } from 'date-fns'

const Timer = () => {
    const [minutesToCountdown, setMinutesToCountdown] = useState(1);
    const [timerId, setTimerId] = useState();
    const [currentDataValues, setCurrentDataValues] = useState({ startDate: new Date(), endData: new Date(), TimeLeft: '' });
    const [isLate, setIsLate] = useState(false);

    const stopTimer = () => {
        clearInterval(timerId);
    };

    const startTimer = (startTimerTime) => {
        let horarioFinal = new Date();
        stopTimer();
         
        if (minutesToCountdown > 0) {
            horarioFinal = addMinutes(new Date(), minutesToCountdown);
        }

        const id = setInterval(() => {
            let novaData = new Date();
            const interval = intervalToDuration({
                start: novaData,
                end: horarioFinal
            })
            const IsLate = isAfter(new Date(), horarioFinal);
            setIsLate(IsLate);
            const timeLeftFormatted = `${IsLate ? '-' : ''} ${interval.minutes.toString().padStart(2, "0")}:${interval.seconds.toString().padStart(2, "0")}`;

            setCurrentDataValues({ startDate: startTimerTime, endData: horarioFinal, TimeLeft: interval, TimeLeftFormatted: timeLeftFormatted });
        }, 1000);

        setTimerId(id);
    };


    return (
        <Container>
            <Settings>  <span>Minutos</span>
                <Input onChange={e => setMinutesToCountdown(e.target.value)} value={minutesToCountdown}/>
                <Button type="button" value="start timer" onClick={() => startTimer(new Date())} />
            </Settings>
            <CountdownContainer negative={isLate}>
                <TopTitle>Faltam</TopTitle>
                {/* <h1>{currentDataValues.TimeLeft !== "" ? `${currentDataValues.TimeLeft.minutes}:${currentDataValues.TimeLeft.seconds}` : '00:00'}</h1> */}
                <TimeLeft negative={isLate}>{currentDataValues.TimeLeft !== "" ? `${currentDataValues.TimeLeftFormatted}` : '00:00'}</TimeLeft>
                <BottomTitle>para o início</BottomTitle>
            </CountdownContainer>

        </Container>
    );
};

export default Timer;
