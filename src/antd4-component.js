import React from 'react';
import { Input, Alert, notification } from 'antd';

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.css'
// import './antd4-component.less';

const { Search } = Input;

export default function Antd4Component() {
    const [searchText, setSearchText] = React.useState(null);
    const [allSearches, setAllSearches] = React.useState([]);

    const addSearch = (text) => {
        const newSearches = [...allSearches, text];
        console.log('add search:', text, newSearches);
        setAllSearches(newSearches);

        // clear the search
        setSearchText('');

        // show notification
        notification.open({
            message: 'جستجو',
            description:
            'جستجوی شما ارسال شد. می‌توانید دوباره جستجو کنید.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement: 'topLeft',
            duration: 2
        });
    };
    
    // rendering
    console.log('Rendring...');
    return (
        <div className="antd4-comp-wrapper">

            <div className="test-components">

                <Search 
                    placeholder="جست‌وجو کنید"
                    value={searchText}
                    onSearch={value => {addSearch(value); console.log('searched:', value);}}
                    onChange={e => setSearchText(e.target.value)} />

                {searchText &&
                    <p>جستجو: <b>{searchText}</b></p>
                }

                {allSearches.length > 0 && 
                    <div className="searches">
                        <h4>سرچ‌ها:</h4>
                        {allSearches.map((searchValue, i) => (
                            <Alert key={i} message={(i+1)+'. جستجو: '+searchValue} type="info" />
                        ))}
                    </div>
                }

            </div>
        </div>
    );
}
