import React, {useState} from 'react'
import List from "../List";
import './AddList.scss'
import Badge from "../Badge";
import closeSvg from '../../assets/img/close.svg'

const AddList = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, setSelectedColor] = useState(colors[0].id)

    const onClose = () => {
        setVisiblePopup(false)
    }

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(!visiblePopup)}
                items={[
                    {
                        id: 1,
                        className: 'list__add-btn',
                        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                    fill="none">
                            <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>), name: 'Добавить список'
                    },
                ]}
            />
            {visiblePopup && <div className="add-list__popup">
                <img onClick={onClose} src={closeSvg} alt="Close button" className="add-list__popup-close-btn"/>
                <input type="text" placeholder="Название списка" className="field"/>
                <div className="add-list__popup-colors">
                    {colors.map(color => (
                        <Badge
                            onClick={() => setSelectedColor(color.id)}
                            key={color.id}
                            color={color.name}
                            className={selectedColor === color.id && 'active'}
                        />
                    ))}
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    );
}

export default AddList