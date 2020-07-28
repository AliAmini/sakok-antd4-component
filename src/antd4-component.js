import React from 'react';
import * as Antd from 'antd';

// import 'antd/dist/antd.css'; // antd3 NOTE: TODO: We dont import Antd4 Style! it must added manually in another file to avoid style conflicts
import './antd4-component.less';

const 
    AntdInput = Antd.Input,
    AntdSeacch = AntdInput.Search,
    AntdAlert = Antd.Alert,
    AntdNotification = Antd.notification,
    AntdButton = Antd.Button;


export function Button(props) {
    return (
        <AntdButton {...props} />
    );
}

export function Input(props) {
    return (
        <AntdInput {...props} />
    );
}

export function SearchInput(props) {
    return (
        <AntdSeacch {...props} />
    );
}

export function Alert(props) {
    return (
        <AntdAlert {...props} />
    );
}

export function SearchUI() {
    const [searchText, setSearchText] = React.useState(null);
    const [allSearches, setAllSearches] = React.useState([]);

    const addSearch = (text) => {
        const newSearches = [...allSearches, text];
        console.log('add search:', text, newSearches);
        setAllSearches(newSearches);

        // clear the search
        setSearchText('');

        // show notification
        AntdNotification.open({
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

                <SearchInput 
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
