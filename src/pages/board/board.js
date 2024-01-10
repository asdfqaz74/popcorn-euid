import pocketbase from 'pocketbase';
import { tiger, insertLast, getPbImageURL, comma } from '/src/lib';

const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

async function renderProduct() {
  const responseCommunity = await pb.collection('community').getList(1, 50, {
    expand: 'SR_location',
  });
  console.log(responseCommunity);
  const communityData = responseCommunity.items;

  communityData.forEach((element) => {
    const template = /* html */ `
     <div class="col-start-1 row-start-1 row-end-3 col-end-3">
            <span
              class="board-keyword p-1 border border-black rounded-default bg-bluegray-300 text-background"
            >
              같이해요
            </span>
            <strong
              class="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
            >
            ${element.title}
            </strong>
            <div class="my-1 flex">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="board-people">  ${element.activity} </span>
            </div>
            <div class="my-1 flex">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span class="board-when">     ${element.date}</span>
              <span class="board-time">오후 7:00</span>
            </div>
            <div class="my-1">
              <span class="board-location">  ${element.expand.SR_location.locationSecond}</span>
              <span>·</span>
              <span class="board-writeTime"> 9분전 </span>
            </div>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="/public/images/my.svg"
              alt="게시물 미리보기 사진"
            />
          </div>
          <div class="gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="/public/images/people.svg" alt="참가 인원수" />
            <span class="board-joinPeople">${element.headcount}/3명</span>
          </div> 

  `;

    insertLast('section > div', template);
  });
}

renderProduct();
