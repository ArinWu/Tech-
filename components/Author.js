import React from 'react';

import '../static/style/pages/author.css'

import { Divider, Avatar } from 'antd';

const Author =()=> {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="http://i1.hdslb.com/bfs/face/a4bbb8025229aa1239bf5603ee3497732917ff7b.jpg_64x64.jpg"></Avatar>
                
            </div>
            <div className="author-introduction">
                没有理由，没有tag
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="github" className="account" />
            </div>
        </div>
    )
}
export default Author