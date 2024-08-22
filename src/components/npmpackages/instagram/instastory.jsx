import React, { Component } from 'react';

import Stories from 'react-insta-stories';
 const stories=[
    // {
    //     url:'imag1.jpg' ,
    //     duration: 1500,
    // },
    // {
    //     url: 'img2.jpg',
    //     duration: 1500,
    // },
    // {
    //     url:'imag3.jpg' ,
    //     duration: 1500,
    // }

 ]
const Customstory = () => {
	return (
		<Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={500}
		/>
	);
};
export default Customstory