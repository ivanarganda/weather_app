import { FC } from 'react';
interface RightSectonProps {
    
}
 
const RightSecton: FC<RightSectonProps> = (props) => {
    return (
        <div className="right-section">
            <div className="right-section-header">
                <div className="right-section-header-title">
                    <h1>Right Section</h1>
                </div>
            </div>
            <div className="right-section-body">
                <div className="right-section-body-title">
                    <h1>Right Section Body</h1>
                </div>
            </div>
        </div>
    );
}
 
export default RightSecton;