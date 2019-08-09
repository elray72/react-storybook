import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Story, {
	StoryContent,
	StoryDemo,
} from '../../components/templates/Story';
import * as Icon from '../../components/atoms/Icon';

interface IIconItem {
	children: React.ReactNode;
	label: string;
}

const IconList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const IconLabel = styled.span``;

const Li = styled.li`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const IconItem: React.FC<IIconItem> = (props) => {
	return (
		<Li>
			{props.children}
			<IconLabel>{props.label}</IconLabel>
		</Li>
	);
};

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Iconography</h1>
			<p>
				This design system uses icons from the free version of{' '}
				<a href="https://github.com/FortAwesome/">Font Awesome</a>.
			</p>
		</StoryContent>
		<StoryDemo>
			<IconList>
				<IconItem label="AddressBook">
					<Icon.AddressBook />
				</IconItem>
				<IconItem label="AddressCard">
					<Icon.AddressCard />
				</IconItem>
				<IconItem label="Adjust">
					<Icon.Adjust />
				</IconItem>
				<IconItem label="Android">
					<Icon.Android />
				</IconItem>
				<IconItem label="Apple">
					<Icon.Apple />
				</IconItem>
				<IconItem label="AreaChart">
					<Icon.AreaChart />
				</IconItem>
				<IconItem label="At">
					<Icon.At />
				</IconItem>
				<IconItem label="Backward">
					<Icon.Backward />
				</IconItem>
				<IconItem label="Ban">
					<Icon.Ban />
				</IconItem>
				<IconItem label="Bell">
					<Icon.Bell />
				</IconItem>
				<IconItem label="Bolt">
					<Icon.Bolt />
				</IconItem>
				<IconItem label="Bomb">
					<Icon.Bomb />
				</IconItem>
				<IconItem label="Book">
					<Icon.Book />
				</IconItem>
				<IconItem label="Bookmark">
					<Icon.Bookmark />
				</IconItem>
				<IconItem label="">
					<Icon.Bug />
				</IconItem>
				<IconItem label="">
					<Icon.Building />
				</IconItem>
				<IconItem label="">
					<Icon.Calendar />
				</IconItem>
				<IconItem label="">
					<Icon.Camera />
				</IconItem>
				<IconItem label="">
					<Icon.CC />
				</IconItem>
				<IconItem label="">
					<Icon.Check />
				</IconItem>
				<IconItem label="">
					<Icon.Circle />
				</IconItem>
				<IconItem label="">
					<Icon.Clock />
				</IconItem>
				<IconItem label="">
					<Icon.Clone />
				</IconItem>
				<IconItem label="">
					<Icon.Cloud />
				</IconItem>
				<IconItem label="">
					<Icon.Code />
				</IconItem>
				<IconItem label="">
					<Icon.CodePen />
				</IconItem>
				<IconItem label="">
					<Icon.Coffee />
				</IconItem>
				<IconItem label="">
					<Icon.Cog />
				</IconItem>
				<IconItem label="">
					<Icon.Comment />
				</IconItem>
				<IconItem label="">
					<Icon.Copyright />
				</IconItem>
				<IconItem label="">
					<Icon.CreditCard />
				</IconItem>
				<IconItem label="">
					<Icon.Cut />
				</IconItem>
				<IconItem label="">
					<Icon.Dashboard />
				</IconItem>
				<IconItem label="">
					<Icon.Database />
				</IconItem>
				<IconItem label="">
					<Icon.Desktop />
				</IconItem>
				<IconItem label="">
					<Icon.Download />
				</IconItem>
				<IconItem label="">
					<Icon.Dropbox />
				</IconItem>
				<IconItem label="">
					<Icon.Eject />
				</IconItem>
				<IconItem label="">
					<Icon.EllipsisH />
				</IconItem>
				<IconItem label="">
					<Icon.EllipsisV />
				</IconItem>
				<IconItem label="">
					<Icon.Envelope />
				</IconItem>
				<IconItem label="">
					<Icon.Exclamation />
				</IconItem>
				<IconItem label="">
					<Icon.ExclamationCircle />
				</IconItem>
				<IconItem label="">
					<Icon.ExclamationTriangle />
				</IconItem>
				<IconItem label="">
					<Icon.Expand />
				</IconItem>
				<IconItem label="">
					<Icon.ExternalLink />
				</IconItem>
				<IconItem label="">
					<Icon.Eye />
				</IconItem>
				<IconItem label="">
					<Icon.Facebook />
				</IconItem>
				<IconItem label="">
					<Icon.FastBackward />
				</IconItem>
				<IconItem label="">
					<Icon.FastForward />
				</IconItem>
				<IconItem label="">
					<Icon.File />
				</IconItem>
				<IconItem label="">
					<Icon.FileExcel />
				</IconItem>
				<IconItem label="">
					<Icon.FilePdf />
				</IconItem>
				<IconItem label="">
					<Icon.FilePhoto />
				</IconItem>
				<IconItem label="">
					<Icon.FilePicture />
				</IconItem>
				<IconItem label="">
					<Icon.FilePowerPoint />
				</IconItem>
				<IconItem label="">
					<Icon.FileVideo />
				</IconItem>
				<IconItem label="">
					<Icon.FileWord />
				</IconItem>
				<IconItem label="">
					<Icon.FileZip />
				</IconItem>
				<IconItem label="">
					<Icon.Filter />
				</IconItem>
				<IconItem label="">
					<Icon.Fire />
				</IconItem>
				<IconItem label="">
					<Icon.FortAwesome />
				</IconItem>
				<IconItem label="">
					<Icon.Forward />
				</IconItem>
				<IconItem label="">
					<Icon.GitHub />
				</IconItem>
				<IconItem label="">
					<Icon.Google />
				</IconItem>
				<IconItem label="">
					<Icon.Group />
				</IconItem>
				<IconItem label="">
					<Icon.HashTag />
				</IconItem>
				<IconItem label="">
					<Icon.Heart />
				</IconItem>
				<IconItem label="">
					<Icon.Image />
				</IconItem>
				<IconItem label="">
					<Icon.Info />
				</IconItem>
				<IconItem label="">
					<Icon.InfoCircle />
				</IconItem>
				<IconItem label="">
					<Icon.Instagram />
				</IconItem>
				<IconItem label="">
					<Icon.Laptop />
				</IconItem>
				<IconItem label="">
					<Icon.LightBulb />
				</IconItem>
				<IconItem label="">
					<Icon.LinkedIn />
				</IconItem>
				<IconItem label="">
					<Icon.ListOL />
				</IconItem>
				<IconItem label="">
					<Icon.ListUL />
				</IconItem>
				<IconItem label="">
					<Icon.LocationArrow />
				</IconItem>
				<IconItem label="">
					<Icon.Lock />
				</IconItem>
				<IconItem label="">
					<Icon.Map />
				</IconItem>
				<IconItem label="">
					<Icon.Minus />
				</IconItem>
				<IconItem label="">
					<Icon.MinusCircle />
				</IconItem>
				<IconItem label="">
					<Icon.Mobile />
				</IconItem>
				<IconItem label="">
					<Icon.Paperclip />
				</IconItem>
				<IconItem label="">
					<Icon.PaperPlane />
				</IconItem>
				<IconItem label="">
					<Icon.Paste />
				</IconItem>
				<IconItem label="">
					<Icon.Pause />
				</IconItem>
				<IconItem label="">
					<Icon.Pencil />
				</IconItem>
				<IconItem label="">
					<Icon.Phone />
				</IconItem>
				<IconItem label="">
					<Icon.Play />
				</IconItem>
				<IconItem label="">
					<Icon.PlayCircle />
				</IconItem>
				<IconItem label="">
					<Icon.Plus />
				</IconItem>
				<IconItem label="">
					<Icon.PlusCircle />
				</IconItem>
				<IconItem label="">
					<Icon.QrCode />
				</IconItem>
				<IconItem label="">
					<Icon.Question />
				</IconItem>
				<IconItem label="">
					<Icon.QuestionCircle />
				</IconItem>
				<IconItem label="">
					<Icon.QuoteLeft />
				</IconItem>
				<IconItem label="">
					<Icon.QuoteRight />
				</IconItem>
				<IconItem label="">
					<Icon.Recycle />
				</IconItem>
				<IconItem label="">
					<Icon.Reddit />
				</IconItem>
				<IconItem label="">
					<Icon.Refresh />
				</IconItem>
				<IconItem label="">
					<Icon.Repeat />
				</IconItem>
				<IconItem label="">
					<Icon.RotateLeft />
				</IconItem>
				<IconItem label="">
					<Icon.RotateRight />
				</IconItem>
				<IconItem label="">
					<Icon.Search />
				</IconItem>
				<IconItem label="">
					<Icon.ShoppingCart />
				</IconItem>
				<IconItem label="">
					<Icon.Sitemap />
				</IconItem>
				<IconItem label="">
					<Icon.Sliders />
				</IconItem>
				<IconItem label="">
					<Icon.Snapchat />
				</IconItem>
				<IconItem label="">
					<Icon.Sort />
				</IconItem>
				<IconItem label="">
					<Icon.Spotify />
				</IconItem>
				<IconItem label="">
					<Icon.Star />
				</IconItem>
				<IconItem label="">
					<Icon.Stop />
				</IconItem>
				<IconItem label="">
					<Icon.StopCircle />
				</IconItem>
				<IconItem label="">
					<Icon.Table />
				</IconItem>
				<IconItem label="">
					<Icon.Tablet />
				</IconItem>
				<IconItem label="">
					<Icon.Tag />
				</IconItem>
				<IconItem label="">
					<Icon.Tags />
				</IconItem>
				<IconItem label="">
					<Icon.ThumbsDown />
				</IconItem>
				<IconItem label="">
					<Icon.ThumbsUp />
				</IconItem>
				<IconItem label="">
					<Icon.ThumbTack />
				</IconItem>
				<IconItem label="">
					<Icon.Times />
				</IconItem>
				<IconItem label="">
					<Icon.Twitter />
				</IconItem>
				<IconItem label="">
					<Icon.Undo />
				</IconItem>
				<IconItem label="">
					<Icon.Unlock />
				</IconItem>
				<IconItem label="">
					<Icon.User />
				</IconItem>
				<IconItem label="">
					<Icon.UserPlus />
				</IconItem>
				<IconItem label="">
					<Icon.Users />
				</IconItem>
				<IconItem label="">
					<Icon.VolumeDown />
				</IconItem>
				<IconItem label="">
					<Icon.VolumeOff />
				</IconItem>
				<IconItem label="">
					<Icon.VolumeUp />
				</IconItem>
				<IconItem label="">
					<Icon.WhatsApp />
				</IconItem>
				<IconItem label="">
					<Icon.YouTube />
				</IconItem>
			</IconList>
		</StoryDemo>
	</Story>
);

storiesOf('Foundation|Core', module).add('Iconography', StoryComponent);
