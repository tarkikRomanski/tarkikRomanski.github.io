import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css'; // Make sure to import CSS for styles!

const DateDifferenceCalculator: React.FC = () => {
    // States for start and end dates
    const [startDate, setStartDate] = useState<moment.Moment | Date | string | undefined>(undefined);
    const [endDate, setEndDate] = useState<moment.Moment | Date | string | undefined>(undefined);

    // Function to calculate the difference in hours
    const calculateDifferenceInHours = (): string => {
        if (!startDate || !endDate) {
            return '0.00';
        }

        if (moment.isMoment(startDate) && moment.isMoment(endDate)) {
            const diffInHours = moment.duration(endDate.diff(startDate)).asHours();
            return diffInHours.toFixed(2); // Keep 2 decimal precision
        }
        return '0.00'; // Default result when dates are not selected
    };

    // Function to reset the date pickers
    const resetDates = () => {
        setStartDate(undefined);
        setEndDate(undefined);
    };

    return (
        <div className="p-4">
            <h3>Date Difference Calculator</h3>
            <Form>
                <Row className="mb-3">
                    {/* Start Date Picker */}
                    <Form.Group as={Col} controlId="formStartDate">
                        <Form.Label>Start Date:</Form.Label>
                        <Datetime
                            value={startDate}
                            onChange={(date) =>
                                setStartDate(moment.isMoment(date) ? date : undefined)
                            }
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm"
                            className="form-control"
                        />
                    </Form.Group>

                    {/* End Date Picker */}
                    <Form.Group as={Col} controlId="formEndDate">
                        <Form.Label>End Date:</Form.Label>
                        <Datetime
                            value={endDate}
                            onChange={(date) =>
                                setEndDate(moment.isMoment(date) ? date : undefined)
                            }
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm"
                            className="form-control"
                        />
                    </Form.Group>
                </Row>
            </Form>

            {/* Result */}
            <InputGroup className="mt-3">
                <InputGroup.Text>Result:</InputGroup.Text>
                <Form.Control
                    type="text"
                    readOnly
                    value={`${calculateDifferenceInHours()} hours`}
                />
            </InputGroup>

            {/* Reset Button */}
            <div className="mt-3">
                <Button variant="secondary" onClick={resetDates}>
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default DateDifferenceCalculator;
