import React from 'react';
import ReactDOM from 'react-dom';
import iScroll from './lib/iscroll';
// import IScroll from './lib/iscroll-master/build/iscroll';
import $ from 'jquery';
import './lib/rem.js';
import './style.css';
import './css/font-face.css';
import './css/Noto+Serif+SC.css';

/*
记一些nmp指令

npm start开启本地服务
npm run build 打包至build文件夹
npm run deploy 上传git

*/


class Title extends React.Component {
	render() {
		return (
			<div id="title">
				<h1>Hello, Nat!</h1>
				<h2> Yi Liu </h2>
			</div>
		);
	}
}

class Projects extends React.Component {
	// constructor(props){
	// 	super(props);

	// }

	//当该组件装载后
	componentDidMount() {
		console.log(this.pcClient);
		//加载iScroll插件
		const options = {
			preventDefault: false,// 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
			zoom: false,// 禁止缩放
			mouseWheel: true,// 支持鼠标滚轮
			probeType: 3,// 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
			bounce: true, // 拖拽超过上下界后出现弹射动画效果
			scrollbars: false,// 展示滚动条
		};

		setTimeout(function () {//由于手机性能的原因，我们在定时器里面进行实例化
		  this.myScroll = new iScroll("#projectSection",options);  
		},10);

		setTimeout(function() {
			this.myScroll.refresh();
		},100);
	}

	//当组件更新时
	componentDidUpdate() {
	  // this.myScroll.refresh();  
	}

	//组件将会卸载
	componentWillUnmount() {
		clearTimeout(this.myScroll);
		console.log("组件移除");
	}
	
	//检测是否PC端网页
	isPcClient() {
		if(document.documentElement.clientWidth >= 640){
			return true;
		}else{
			return false;
		}
	}

	render() {
		const pcWidthController = {
			"marginLeft": "1rem",
			"marginRight": "1rem"
		};
		
		return (
			<div id="projectSection">
				<div id="scroller">
					<div id="pcWidthController" style={(this.isPcClient())?pcWidthController:null} >
						<div id="projectDivider" >
							<div id="titleSection">
								<div id="projectTitle">
									<a href = "/fyp" target="_blank">BSc. Final Year Project</a>
								</div>
								<div id="projectLinkBtn" onClick={()=>window.open('/fyp','_blank')}><span>Project Website</span></div></div>
							<div id="projectSubTitle">
								An Integrated Solution for Planning Campus Paths from Student’s Timetables
							</div>

							<div id="projectDetail">
								Researched mainly on the online-map interaction topics, with JavaScript as the main programming language. Provided an integrated solution for student timetables and campus path planning system via the user-centred design; Planed a path automatically for students to reach their lecture buildings based on their timetable.
								<p>Developed an online mobile web-app, which has been designed to behave like a native mobile app (compatible with both Android and iOS system); Allowed visitors to navigate university’s landmarks or buildings, and enabled students to upload their timetables for an automatically updated map that helped them plan paths for their next lectures.</p>
							</div>
						</div>

						<div id="projectDivider">
							<div id="titleSection">
								<div id="projectTitle">
									Unreal Engine 4 Video Game Project
								</div>
							</div>
							<div id="projectSubTitle">
								Multi-Role-Playing Video Game
							</div>

							<div id="projectDetail">
								An independent video game using Unreal Engine 4 (UE4) as the physics engine; Using C++ and UE4 blueprints as the development languages to construct gameplay system; Using Cinema 4D as the 3D software to model ingame scenes; Using Photoshop and SAI as the design tool to create user interface and artwork.

								<p>Providing multiple characters for the player to switch according to the needs of the task and the background of the story. Providing a complete database structure to store multi-role data.</p>
							</div>
						</div>


						<div id="projectDivider">
							<div id="titleSection">
								<div id="projectTitle">
									<a href = "https://github.com/YiLiuNat/YiLiu-Dissertations/blob/master/2018-11%20A%20Meal%20Planning%20System%20to%20Support%20Students%20%E2%80%98Eating%20Well%E2%80%99/Dissertation.pdf" target="_blank">
										Human Computer Interaction Project
									</a>
								</div>
								<div id="projectReportBtn" onClick={()=>window.open('https://github.com/YiLiuNat/YiLiu-Dissertations/blob/master/FINAL%20YEAR%20PROJECT%20(Bsc%20Computer%20Science)/Dissertation.pdf','_blank')}>Dissertation</div>
							</div>
							
							<div id="projectSubTitle">
								An Intelligent Meal Planning System to Support Students ‘Eating Well’
							</div>
							<div id="projectDetail">
								Gathered requirements of the project, with online questionnaire designed to find the target users; Conducted interviews with users to further learn about the user requirements. Designed a system to support students ‘Eating Well’ and provided different solutions for different user requirements.
							</div> 
						</div>
					</div>
				</div>
			</div> 
		);
	}
}

class Main extends React.Component {
	constructor(props, context) {
		super(props, context);//将props传递到父类的构造函数中
		this.state = {
			showTitle: true,
			showProjects: false
		};

		// this.iScroll = this.iScroll.bind(this);

	}


	//当点击Project按钮时将showTitle设为false(隐藏title)
	clickProjectBtn() {
		this.setState({
			showTitle: false,
			showProjects: true
		});
		window.location.href="#!projects";
		console.log(this.state);
	}

	clickNameBtn() {
		this.setState({
			showTitle: true,
			showProjects: false
		});
		window.location.href="#";
		console.log(this.state);
	}


	// componentDidMount() {
	// 	setTimeout(function() {
	// 		if(window.location.hash == "#!projects"){
	// 			this.setState({
	// 				showTitle: false,
	// 				showProjects: true
	// 			});
	// 		}else if(window.location.hash == ""){
	// 			this.clickNameBtn.bind(this);
	// 		}else{}
	// 	},10);
		
	// }

	render() {
		const {
			showTitle,
			showProjects,
			IScroll
		} = this.state;

		return (
			<div>
				<div id="menu">
					<div id ="colorBar">
						<button
							id="nameBtn"
							onClick={this.clickNameBtn.bind(this)}
						>
							<span id="nameEng">YI LIU &nbsp;</span>
							<span id="nameCHN">柳 沂</span>
						</button>
						<button
							id="aboutBtn"
							onClick={
								// () => window.location.href="/"
								this.clickNameBtn.bind(this)
							}
						>
							ABOUT
						</button>
						<button
							id="projectsBtn"
							onClick={
								this.clickProjectBtn.bind(this)/*原版SPA显示隐藏组件方法*/
								// ()=>{不完美的刷新大法
								// 	window.location.href="#!projects";
								// 	// window.location.reload();
								// }
							}
						>
							PROJECTS
						</button>
						<button
							id="funStuffBtn"
							onClick={this.clickProjectBtn.bind(this)
									/*window.location.href="#!projects";*/
									/* window.location.reload();*/
									/*this.clickNameBtn.bind(this);*/
							}
						>
							FUN STUFF
						</button>
					</div>
				</div>
				

				{/*(showProjects || (window.location.hash == "#!projects")) ? (document.title="Projects - Yi Liu 柳沂的项目笔记本", <Projects />) : null*/}
				{/*(window.location.hash == "")? (<Title />) : null*/}
				{/*(window.location.hash == "#!projects")?(document.title="Projects - Yi Liu 柳沂的项目笔记本", <Projects />):null*/}
				{/*(window.location.hash == "")?(<Title />):null*/}

				{/*当浏览器要么出现#要么没有锚点 并且Title为true时才能显示title (title默认为true)*/}
				{showTitle && ((window.location.hash == "#")||(window.location.hash == ""))?(<Title />):null}
				{showProjects || (window.location.hash == "#!projects") ?(<Projects />):null}


			</div>
		);
	}
}


// class Menu extends React.Component {
// 	render() {
// 		return (
// 			<div id="menu">
// 				<button
// 					id="nameBtn"
// 					onClick={() => window.location.href="/"}
// 				>
// 					YI LIU (柳沂)
// 				</button>
// 				<button
// 					id="aboutBtn"
// 					onClick={() => window.location.href="/"}
// 				>
// 					ABOUT
// 				</button>
// 				<button
// 					id="projectsBtn"
// 					onClick={()=> this.setState({display.false})}
// 				>
// 					PROJECT
// 				</button>


// 			</div>
// 		);
// 	}
// }


ReactDOM.render(
	<Main />,
	document.getElementById('root')
);


// function Nat(props) {
// 	return (
// 		<div>
// 			<h1>Hello, Nat!</h1>
// 			<h2>Yi Liu</h2>
// 			<a href="/fyp">Final Year Project</a>
// 		</div>
// 	);
// }



// function render() {
// 	ReactDOM.render(
// 		Nat(),
// 		document.getElementById('nat')
// 	);
// }
// render();