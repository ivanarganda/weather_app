import { FC } from 'react';
interface Props {
    
}
 
const BottomSection: FC<Props> = () => {
    return ( 
        <div className="left-section">
            <div className="left-section-header">
                <div className="left-section-header-title">
                    <h1>Bottom section</h1>
                </div>
            </div>
            <div className="left-section-body">
                <div className="left-section-body-title">
                    <h1>Bottom section</h1>
                </div>
                <div className="left-section-body-subtitle">
                    <h1>Bottom section</h1>
                </div>
            </div>
        </div>
    );
}
 
export default BottomSection;