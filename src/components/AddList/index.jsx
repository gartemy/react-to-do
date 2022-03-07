import React, {useEffect, useState} from 'react';
import List from '../List';
import './AddList.scss';
import Badge from '../Badge';
import closeSvg from '../../assets/img/close.svg';
import axios from "axios";

const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(3);
    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (Array.isArray(colors)) {
            setSelectedColor(colors[0].id)
        }
    }, [colors])

    const addList = () => {
        if (!inputValue) {
            alert('Введите название списка!')
            return
        }
        setIsLoading(true)
        axios.post('http://localhost:3001/lists', {
            name: inputValue,
            colorId: selectedColor
        }).then(({data}) => {
            const color = colors.filter(color => color.id === selectedColor)[0]
            const listObj = {...data, color, tasks: []}
            onAdd(listObj)
            onClose()
        }).catch(() => {
            alert('Ошибка при добавлении списка!')
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const onClose = () => {
        setInputValue('')
        setVisiblePopup(false)
        setSelectedColor(colors[0].id)
    }

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        id: 1,
                        className: 'list__add-btn',
                        icon: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <path
                                    d="M6 1V11"
                                    stroke="#868686"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 6H11"
                                    stroke="#868686"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ),
                        name: 'Добавить список',
                    },
                ]}
            />
            {visiblePopup && (
                <div className="add-list__popup">
                    <img
                        onClick={onClose}
                        src={closeSvg}
                        alt="Close button"
                        className="add-list__popup-close-btn"
                    />
                    <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}
                           placeholder="Название списка" className="field"/>
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
                    <button onClick={addList} className="button">
                        {isLoading ? 'Добавление...' : 'Добавить'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddList;
