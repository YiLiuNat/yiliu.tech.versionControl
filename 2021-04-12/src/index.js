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

Jekyll指令
$ bundle exec jekyll serve --port 2333

*/


class Title extends React.Component {
	render() {
		return (
			<div>
				<div id="title">
					<h1>Hello, I'm Yi Liu!</h1>
				</div>
				
				<div id="introduction">
					<span>I got my Bachelor's degree from the University of Birmingham, working with Dr. Sandy Gould in the School of Computer Science. I work on human-computer interaction and front-end development. I'm especially interested in exploring new approaches to user experience and interaction.</span>
				</div>
				<Footer />
			
			</div>

		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div id="footer">
					<span id="copyright">Designed and programmed with <span id="heart">❤</span> by Yi Liu</span>
				</div>
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

		//给pcWidthController添加判断适配移动端的css tag
		document.getElementsByClassName("pcWidthController")[0].className += 
			" "+this.mobiTagChange("projectWidthMobi","projectWidthPC");
		
		//每个Project下都有txtSection用来控制图文左右比例，在移动端需要变成上下格式
		let textSection = document.getElementsByClassName("txtSection");
		for(let i=0; i < textSection.length; i++){
			textSection[i].className += " "+this.mobiTagChange("txtLocationMobi","txtLocationPC");
		}

		console.log(this.between850to1366());
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
	
	//检测是否移动端网页 返回true false
	isMobiClient() {
		return document.documentElement.clientWidth <= 850;
	}

	//如果是移动端网页使用前一个tag，否则用后一个
	mobiTagChange(mobiTag, pcTag) {
		if(this.isMobiClient()){
			return mobiTag;
		}else{
			return pcTag;
		}
	}

	//检测是否在850到1366这个文本自适应区间
	between850to1366() {
		let clientWidth = document.documentElement.clientWidth;
		return (clientWidth > 850)&&(clientWidth <= 1366);
	}

	render() {
		// const pcWidthController = {
		// 	"marginLeft": "1rem",
		// 	"marginRight": "1rem"
		// };
		
		return (
			<div id="projectSection">
				<div id="scroller">
					<div className="pcWidthController">
						{/* class={this.MobiTagChange("projectWidthPC","projectWidthMobi")}*/}
						<div id="projectDivider" >
							<div className="txtSection" >
								<div id="UobLogo"></div>
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
							<div className="imgSection"></div>
						</div>

						<div id="projectDivider">
							<div className="txtSection" >
								<div id="UE4Logo"></div>
								<div id="titleSection">
									<div id="projectTitle">
										Unreal Engine 4 Video Game Project
									</div>
								</div>
								<div id="projectSubTitle">
									Multi-Role-Playing Video Game
								</div>

								<div id="projectDetail">
									An independent video game used Unreal Engine 4 (UE4) as the physics engine, with C++ and UE4 blueprints as the development languages to construct gameplay system; Used Cinema 4D as the 3D software to model ingame scenes, Photoshop and SAI as the design tool to create user interfaces and artworks.

									<p>Provided multiple characters for the player to switch according to the needs of the task and the background of the story. Provided a complete database structure to store multi-role data.</p>
								</div>
							</div>
						</div>


						<div id="projectDivider">
							<div className="txtSection" >
								<div id="UobLogo"></div>
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
						{/*
						<div id="projectDivider">
							<div className="txtSection" >
								<div id="SinaLogo"></div>
								<div id="titleSection">
									<div id="projectTitle">
										<a href = "https://github.com/YiLiuNat/YiLiu-Dissertations/blob/master/2018-11%20A%20Meal%20Planning%20System%20to%20Support%20Students%20%E2%80%98Eating%20Well%E2%80%99/Dissertation.pdf" target="_blank">
											Sina Front-end Project
										</a>
									</div>
									<div id="projectLinkBtn" onClick={()=>window.open('http://news.sina.cn/zt_d/jianchawei2018','_blank')}>Project Website</div>
								</div>
								
								<div id="projectSubTitle">
									An Intelligent Meal Planning System to Support Students ‘Eating Well’
								</div>
								<div id="projectDetail">
									Gathered requirements of the project, with online questionnaire designed to find the target users; Conducted interviews with users to further learn about the user requirements. Designed a system to support students ‘Eating Well’ and provided different solutions for different user requirements.
								</div> 
							</div>
						</div>
						*/}

						<div id="projectDivider">
							<div className="txtSection" >
								<div id="UobLogo"></div>
								<div id="titleSection">
									<div id="projectTitle">
										<a href = "https://github.com/YiLiuNat/YiLiu-Dissertations/blob/master/2019-01%20Solving%20Travelling%20Salesman%20Problem%20Using%20Stochastic%20Local%20Search%20Algorithm/Report.pdf" target="_blank">
											Stochastic Local Search Algorithms Project
										</a>
									</div>
									<div id="projectReportBtn" onClick={()=>window.open('https://github.com/YiLiuNat/YiLiu-Dissertations/blob/master/2019-01%20Solving%20Travelling%20Salesman%20Problem%20Using%20Stochastic%20Local%20Search%20Algorithm/Report.pdf','_blank')}>Dissertation</div>
								</div>
								
								<div id="projectSubTitle">
									Solving Travelling Salesman Problem Using Stochastic Local Search Algorithms
								</div>
								<div id="projectDetail">
									In this project, I was using MATLAB as the programming language to implement the Simulated Annealing and Tabu Search algorithms for solving travelling salesman problem. The 2-OPT algorithm was used as the local search method among them.
								
									<p>The Simulated Annealing algorithm was designed to avoid the drawbacks of the randomized search and local search. The randomized search was good at exploration but bad at exploitation, especially bad for problems where good solutions were a very small portion of all possible solutions. The local search was good at exploitation but bad at exploration.</p>
								
									<p>The Tabu Search was an improved version of local search algorithm, it allowed algorithm to avoid the local optima. The Tabu Search I implemented was the simplest version with the simplest Tabu list which only stored recently visited solutions. The main idea of this Tabu Search was using memory to guide local search process away from local optima.</p>
								</div> 
							</div>
						</div>



						<div id="footerDivider"></div>
					</div>
					<Footer />
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
							onClick={()=>window.open('https://funstuff.design','_blank')
									/*this.clickProjectBtn.bind(this)*/
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
				{showTitle && ((window.location.hash == "#")||(window.location.hash == ""))?(document.title="Yi Liu - 柳沂", <Title />):null}
				{showProjects || (window.location.hash == "#!projects") ?(document.title="Projects - Yi Liu 柳沂的项目笔记本", <Projects />):null}


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