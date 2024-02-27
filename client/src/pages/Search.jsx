import React, { useState } from 'react';
import { Input, Button } from 'antd';

export default function Search() {
    //Search will need logic

    return (
        <div>
            <h1>What to explore?</h1>
            <Input 
                placeholder="Enter your search..." 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                style={{ width: 200, marginRight: 10 }} //Havent tested placement, placeholder for now
            />
            <Button type="primary" onClick={handleSearch}>Search</Button>
        </div>
    );
}