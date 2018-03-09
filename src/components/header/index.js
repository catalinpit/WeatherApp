import { h, Component } from 'preact';
import { route } from 'preact-router';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';
// import style from './style';

export default class Header extends Component {
	closeDrawer() {
		this.drawer.MDComponent.open = false;
		this.state = {
			darkThemeEnabled: false
		};
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	goToForecast = this.linkTo('/Forecast');

	goToQMPlus = () => {
		window.open("http://qmplus.qmul.ac.uk/", "_blank");
	}

	goToQMFeed = this.linkTo('/QMFeed');
	goToAlbany = this.linkTo('/Cities/Albany');
	goToDubai = this.linkTo('/Cities/Dubai');
	goToMexicoCity = this.linkTo('/Cities/MexicoCity');
	goToMiami = this.linkTo('/Cities/Miami');
	goToParis = this.linkTo('/Cities/Paris');
	goToSanFrancisco = this.linkTo('/Cities/SanFrancisco');

	toggleDarkTheme = () => {
		this.setState(
			{
				darkThemeEnabled: !this.state.darkThemeEnabled
			},
			() => {
				if (this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
				}
				else {
					document.body.classList.remove('mdc-theme--dark');
				}
			}
		);
	}

	render() {
		return (
			<div>
				<Toolbar className="toolbar">
					<Toolbar.Row>
						<Toolbar.Section align-start>
							<Toolbar.Icon menu onClick={this.openDrawer}>
								menu
							</Toolbar.Icon>
							<Toolbar.Title>QWeather</Toolbar.Title>
						</Toolbar.Section>
						<Toolbar.Section align-end onClick={this.openSettings}>
							<Toolbar.Icon>search</Toolbar.Icon>
						</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
				<Drawer.TemporaryDrawer ref={this.drawerRef}>
					<Drawer.TemporaryDrawerContent>
						<List>
							<List.LinkItem onClick={this.goHome}>
								<List.ItemIcon>home</List.ItemIcon>
								Home
							</List.LinkItem>
							<List.LinkItem onClick={this.goToForecast}>
								<List.ItemIcon>cloud</List.ItemIcon>
								Hourly Forecast
							</List.LinkItem>
							<List.LinkItem onClick={this.goToQMPlus}>
								<List.ItemIcon>account_circle</List.ItemIcon>
								QM Plus
							</List.LinkItem>
							<List.LinkItem onClick={this.goToQMFeed}>
								<List.ItemIcon>chrome_reader_mode</List.ItemIcon>
								QM Feed
							</List.LinkItem>
							<List.LinkItem onClick={this.openSettings}>
								<List.ItemIcon>settings</List.ItemIcon>
								Settings
							</List.LinkItem>
							<List.LinkItem onClick={this.goToAlbany}>
								<List.ItemIcon>cloud</List.ItemIcon>
									New York
							</List.LinkItem>
							<List.LinkItem onClick={this.goToDubai}>
								<List.ItemIcon>cloud</List.ItemIcon>
									Dubai
							</List.LinkItem>
							<List.LinkItem onClick={this.goToMexicoCity}>
								<List.ItemIcon>cloud</List.ItemIcon>
									Mexico City
							</List.LinkItem>
							<List.LinkItem onClick={this.goToMiami}>
								<List.ItemIcon>cloud</List.ItemIcon>
									Miami
							</List.LinkItem>
							<List.LinkItem onClick={this.goToParis}>
								<List.ItemIcon>cloud</List.ItemIcon>
									Paris
							</List.LinkItem>
							<List.LinkItem onClick={this.goToSanFrancisco}>
								<List.ItemIcon>cloud</List.ItemIcon>
									San Francisco
							</List.LinkItem>
						</List>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
				<Dialog ref={this.dialogRef}>
					<Dialog.Header>Settings</Dialog.Header>
					<Dialog.Body>
						<div>
							Enable dark theme <Switch onClick={this.toggleDarkTheme} />
						</div>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton accept>okay</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}
