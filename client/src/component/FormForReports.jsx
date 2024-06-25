import { useState } from 'react';

export const FormForReports = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!startDate) {
      errors.startDate = 'Start date is required';
    }

    if (!endDate) {
      errors.endDate = 'End date is required';
    }

    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      errors.dateRange = 'End date must be greater than start date';
    }

    if (Object.keys(errors).length === 0) {
      setErrorMessage({});
      onDateRangeChange(startDate, endDate);
    } else {
      setErrorMessage(errors);
    }
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label className="label">From</label>
            <div className="control">
              <input
                className="input"
                type='date'
                placeholder="Select start date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            {errorMessage.startDate && <p className="has-text-danger">{errorMessage.startDate}</p>}
          </div>

          <div className="field">
            <label className="label">To</label>
            <div className="control">
              <input
                className="input"
                type='date'
                placeholder="Select end date"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            {errorMessage.endDate && <p className="has-text-danger">{errorMessage.endDate}</p>}
            {errorMessage.dateRange && <p className="has-text-danger">{errorMessage.dateRange}</p>}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary mt-3" type="submit">Generate Report</button>
        </div>
      </div>
    </form>
  );
};