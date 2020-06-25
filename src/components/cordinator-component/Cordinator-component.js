import React from 'react';
import './../newevent/newevent.scss';
import Card from '../shared/card/card';

const CordinatorCmp = ({ onChange, responsibleList, errors }) => (
    <Card title="Cordinator">
        <div>
            <div className="field-container">
                <label htmlFor="responsible">RESPONSIBLE</label>
                <select name="responsible" id="responsible" className="input-field" onChange={onChange}>
                    {
                        responsibleList.map((opt) => (<option value={JSON.stringify(opt)} key={opt.id}>{opt.name + " " + opt.lastname}</option>))
                    }
                </select>
                {errors.responsible && <div className="errorMsg error-container">{errors.responsible}</div>}
            </div>
            <div className="field-container">
                <label htmlFor="email">EMAIL</label><br></br>
                <input type="text" name="email" className="input-field" onChange={onChange} placeholder="Email" />
                {errors.email && <div className="errorMsg error-container">{errors.email}</div>}
            </div>
        </div>
    </Card>
)

export default CordinatorCmp;