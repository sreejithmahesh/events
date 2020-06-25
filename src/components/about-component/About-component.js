import React from 'react';
import './../newevent/newevent.scss';
import Card from '../shared/card/card';

const AboutCmp = ({ onChange, categorylist, errors, count }) => {
    return (
        <Card title="About">
            <div className="field-container">
                <label htmlFor="title" name="title">Title *</label><br></br>
                <input type="text" id="title" name="title" className="input-field"
                    onChange={onChange}
                    placeholder="Make it short and clear" />
                {errors.title && <div className="errorMsg error-container">{errors.title}</div>}
            </div>

            <div className="field-container">
                <label htmlFor="description">DESCRIPTION*</label><br></br>
                <div style={{ flex: "0 1 50%" }}>
                    <textarea id="description"
                        placeholder="Write about your event be creative"
                        className="input-field"
                        style={{ width: '100%' }}
                        name="description" rows="4" cols="50"
                        maxLength="140"
                        onChange={onChange}
                    ></textarea>
                    <div className="chraracter-count">{count}/140</div>
                </div>
                {errors.description && <div className="errorMsg error-container">{errors.description}</div>}
            </div>
            <div className="field-container">
                <label htmlFor="category">CATEGORY</label>
                <select name="category" id="category" className="input-field" onChange={onChange}>
                    {
                        categorylist.map((opt) => (<option value={JSON.stringify(opt)} key={opt.id}>{opt.name}</option>))
                    }
                </select>
            </div>
            <div className="field-container">
                <label>PAYMENT</label>
                <div className="radio-btn-con">
                    <div>
                        <input type="radio" id="freeevent" name="payment" value="1" onChange={onChange} />
                        <label style={{ marginLeft: '10px', fontSize: '13px' }} htmlFor="freeevent">Free Event</label><span></span>
                    </div>
                    <div style={{ 'marginLeft': '20px' }}>
                        <input type="radio" name="payment" value="1" id="paidevent" onChange={onChange} />
                        <label style={{ marginLeft: '10px', fontSize: '13px' }} htmlFor="paidevent">Paid Event</label><span></span><span></span>
                    </div>
                </div>

            </div>
            <div className="field-container">
                <label htmlFor="reward">REWARD*</label><br></br>
                <input type="number" name="reward" id="reward" className="input-field" placeholder="Number" onChange={onChange} />
            </div>
        </Card>
    )

}

export default AboutCmp;