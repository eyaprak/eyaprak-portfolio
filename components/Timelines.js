import { Container } from './styles/Section.styled';
import { MdSchool, MdBusinessCenter } from 'react-icons/md';
import TimelineItem from './TimelineItem';
import { TimelineData } from '../data/timeline';
function Timelines() {
  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='main-timeline'>
              {TimelineData.map((timeline) => (
                <TimelineItem
                  key={timeline.id}
                  year={timeline.year}
                  title={timeline.title}
                  icon={timeline.icon}
                  description={timeline.description}
                  altText={timeline.altText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          .main-timeline {
            font-family: 'Poppins', sans-serif;
          }
          .main-timeline:after {
            content: '';
            display: block;
            clear: both;
          }
          .main-timeline .timeline {
            width: calc(50% + 30px);
            margin: 0 0 30px;
            float: left;
          }
          .main-timeline .timeline-content {
            color: #555;
            min-height: 147px;
            padding: 20px 75px 20px 20px;
            box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.5);
            display: block;
            position: relative;
            z-index: 1;
          }
          .main-timeline .timeline-content:hover {
            text-decoration: none;
          }
          .main-timeline .timeline-content:before,
          .main-timeline .timeline-content:after {
            content: '';
            background-color: #11b9c5;
            height: 100%;
            width: 60px;
            position: absolute;
            right: 0;
            top: 0;
          }
          .main-timeline .timeline-content:after {
            height: 42px;
            width: 42px;
            transform: rotate(45deg);
            top: calc(100% - 21px);
            right: 9px;
            clip-path: polygon(
              0% 0%,
              0% 100%,
              20% 100%,
              20% 20%,
              80% 20%,
              80% 80%,
              20% 80%,
              20% 100%,
              100% 100%,
              100% 0%
            );
          }
          .main-timeline .timeline-year {
            color: #fff;
            font-size: 30px;
            font-weight: 600;
            line-height: 28px;
            letter-spacing: 0.5px;
            transform: translateY(-50%) rotate(-90deg);
            position: absolute;
            right: -5px;
            top: 50%;
          }
          .main-timeline .title {
            color: #11b9c5;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin: 0 0 8px;
          }
          .main-timeline .timeline-icon {
            color: #29d7e1;
            font-size: 45px;
            text-align: center;
            line-height: 70px;
            height: 70px;
            width: 70px;
            vertical-align: top;
            display: inline-flex;
            align-items: center;
          }
          .main-timeline .description {
            color: #777;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.5px;
            line-height: 22px;
            width: calc(100% - 75px);
            margin: 0;
            display: inline-block;
            font-family: 'Raleway';
          }
          .main-timeline .timeline:nth-child(even) {
            float: right;
          }
          .main-timeline .timeline:nth-child(even) .timeline-content {
            padding: 20px 20px 20px 75px;
          }
          .main-timeline .timeline:nth-child(even) .timeline-content:before {
            right: auto;
            left: 0;
          }
          .main-timeline .timeline:nth-child(even) .timeline-content:after {
            right: auto;
            left: 9px;
          }
          .main-timeline .timeline:nth-child(even) .timeline-year {
            right: auto;
            left: -5px;
          }
          .main-timeline .timeline:nth-child(4n + 2) .timeline-content:before,
          .main-timeline .timeline:nth-child(4n + 2) .timeline-content:after {
            background-color: #0570b7;
          }
          .main-timeline .timeline:nth-child(4n + 2) .title {
            color: #0570b7;
          }
          .main-timeline .timeline:nth-child(4n + 2) .timeline-icon {
            color: #2e90d1;
          }
          .main-timeline .timeline:nth-child(4n + 3) .timeline-content:before,
          .main-timeline .timeline:nth-child(4n + 3) .timeline-content:after {
            background-color: #ac40ab;
          }
          .main-timeline .timeline:nth-child(4n + 3) .title {
            color: #ac40ab;
          }
          .main-timeline .timeline:nth-child(4n + 3) .timeline-icon {
            color: #ca5ec9;
          }
          .main-timeline .timeline:nth-child(4n + 4) .timeline-content:before,
          .main-timeline .timeline:nth-child(4n + 4) .timeline-content:after {
            background-color: #e52c5d;
          }
          .main-timeline .timeline:nth-child(4n + 4) .title {
            color: #e52c5d;
          }
          .main-timeline .timeline:nth-child(4n + 4) .timeline-icon {
            color: #f85686;
          }
          @media screen and (max-width: 767px) {
            .main-timeline .timeline {
              width: 100%;
            }
            .container {
              padding: 10px;
            }
          }
          @media screen and (max-width: 576px) {
            .main-timeline .timeline-content,
            .main-timeline .timeline:nth-child(even) .timeline-content {
              padding: 75px 20px 20px;
            }
            .main-timeline .timeline-content:before,
            .main-timeline .timeline:nth-child(even) .timeline-content:before {
              width: 100%;
              height: 60px;
            }
            .main-timeline .timeline-content:after,
            .main-timeline .timeline:nth-child(even) .timeline-content:after {
              display: none;
            }
            .main-timeline .timeline-year,
            .main-timeline .timeline:nth-child(even) .timeline-year {
              transform: translateX(-50%) translateY(0) rotate(0);
              left: 50%;
              right: auto;
              top: 17px;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Timelines;
