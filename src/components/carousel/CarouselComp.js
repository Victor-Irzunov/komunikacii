import { Carousel, Image } from 'antd'
import transformator from '../../images/carousel/transformator.jpg'
import transformator2 from '../../images/carousel/md/transformator-md.webp'
import avarijnaya from '../../images/carousel/avarijnaya.webp'
import avarijnaya2 from '../../images/carousel/md/avarijnaya-md.webp'
import kabel from '../../images/carousel/kabel.webp'
import kabel2 from '../../images/carousel/md/kabel-md.webp'
import izmereniya from '../../images/carousel/izmereniya.webp'
import izmereniya2 from '../../images/carousel/md/izmereniya-md.webp'
import askue from '../../images/carousel/askue.webp'
import askue2 from '../../images/carousel/md/askue-md.webp'
import linii from '../../images/carousel/linii.webp'
import linii2 from '../../images/carousel/md/linii-md.webp'
import svyaz from '../../images/carousel/svyaz.webp'
import svyaz2 from '../../images/carousel/md/cvyaz-md.webp'
import { useScreens } from '../../constants/Constants'

const contentStyle = {
	height: '40vh',
	color: '#fff',
	lineHeight: '40vh',
	textAlign: 'center',
	background: '#364d79',
}

const CarouselComp = () => {
const screens = useScreens()
	
	return (
		<Carousel
			autoplay
			effect='fade'
			className=''
		>
			<div className='' >
				<Image src={screens.md ? transformator2 : transformator} preview={false} />
			</div>
			<div>
				<Image src={screens.md ? avarijnaya2 : avarijnaya} preview={false} />
			</div>
			<div>
				<Image src={screens.md ? izmereniya2 : izmereniya} preview={false} />
			</div>
			<div>
				<Image src={screens.md ? kabel2: kabel} preview={false} />
			</div>
			<div>
				<Image src={screens.md ? askue2 : askue} preview={false} />
			</div>
			<div>
				<Image src={screens.md ? linii2 : linii} preview={false} />
			</div>
			{/* <div>
				<Image src={screens.md ? svyaz2 : svyaz} preview={false} />
			</div> */}

		</Carousel>

	)
}
export default CarouselComp
