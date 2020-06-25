import React from 'react';
import './../newevent/newevent.scss';
import Card from '../shared/card/card';

const WhenCmp = ({ onChange, errors }) => (
        <Card title="When">
                <div className="field-container">
                    <label htmlFor="startsOn">STARTS ON</label><br></br>
                    <div className="startson-con">
                        <input type="date"
                            onChange={onChange}
                            name="startsOnDate"
                            id="startsOn" className="input-field" />
                        <div style={{ padding: '10px' }}>At</div>
                        <input type="time"
                            onChange={onChange}
                            name="startonTime"
                            className="input-field" />
                        <div style={{ padding: '10px' }}>
                            <input type="radio" id="am"
                                onChange={onChange}
                                name="startsonClock" value="am" />
                            <label style={{ marginLeft: '10px', fontSize: '13px' }}>AM</label>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <input type="radio" id="pm"
                                onChange={onChange}
                                name="startsonClock" value="pm" />
                            <label style={{ marginLeft: '10px', fontSize: '13px' }}>PM</label>
                        </div>
                    </div>
                </div>
                <div className="field-container">
                    <label htmlFor="duration">DURATION</label><br></br>
                    <div className="duration-con">
                        <input type="number" id="duration" name="duration" className="input-field" placeholder="Number" />
                        <div style={{ marginLeft: '10px' }}>hour</div>
                    </div>
                </div>
        </Card>
)

export default WhenCmp;