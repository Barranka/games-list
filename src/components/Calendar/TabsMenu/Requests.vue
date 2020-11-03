<template>
  <div>
    <div class="calendar-body-content" v-for="(item, i) in table" :key="i">
      <div class="title-table"> {{ item.title }}</div>
      <div class="info-tible" v-for="(user, i) in item.users" :key="i">
        <div class="left-content">
          <div class="left-content__date" :class="{status: user.status}">
            <div class="date"> {{ user.date.day }} </div>
            <div class="times">
              <div class="times__month"> {{ user.date.month }} </div>
              <div class="times__times"> {{ user.date.times }} </div>
              <div v-if="user.status">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15ZM7.5 13.6364C10.889 13.6364 13.6364 10.889 13.6364 7.5C13.6364 4.11098 10.889 1.36364 7.5 1.36364C4.11098 1.36364 1.36364 4.11098 1.36364 7.5C1.36364 10.889 4.11098 13.6364 7.5 13.6364ZM7.5 2.72727C7.87656 2.72727 8.18182 3.03253 8.18182 3.40909V7.21758L10.0276 9.06334C10.2938 9.3296 10.2938 9.76131 10.0276 10.0276C9.76131 10.2938 9.3296 10.2938 9.06334 10.0276L7.01788 7.98212C6.89002 7.85425 6.81818 7.68083 6.81818 7.5V3.40909C6.81818 3.03253 7.12344 2.72727 7.5 2.72727Z" fill="#FF3B30"/>
                </svg>
                <span class="status"> {{ user.status }} </span>
              </div>
            </div>
          </div>
          <div class="left-content__info">
            <div class="avatars">
              <img v-if="user.country" :src="getImgUrl(`./flags/${user.country}.png`)" alt="страна">
              <img v-if="user.userImg" class="user-img" :src="getImgUrl(`./users/${user.userImg}.png`)" alt="пользователь">
              <div v-if="user.findConversation " class="none-user">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1262 6.99052C18.6436 6.99052 18.2524 6.5993 18.2524 6.11671V2.98339L13.6274 7.6084C13.2862 7.94965 12.7329 7.94965 12.3916 7.6084C12.0504 7.26716 12.0504 6.71389 12.3916 6.37264L17.0167 1.74763H13.8833C13.4007 1.74763 13.0095 1.35641 13.0095 0.873815C13.0095 0.39122 13.4007 0 13.8833 0H19.1262C19.2447 0 19.3577 0.0235804 19.4607 0.0663042C19.5638 0.108946 19.6603 0.172156 19.7441 0.255935C19.8279 0.339713 19.8911 0.436271 19.9337 0.539333C19.971 0.629248 19.9937 0.726736 19.9989 0.828849C19.9997 0.843742 20 0.858734 20 0.873815V0.874731V6.11671C20 6.5993 19.6088 6.99052 19.1262 6.99052ZM19.1262 17.4028C19.1292 18.141 18.8208 18.8461 18.2769 19.3452C17.733 19.8442 17.0039 20.0907 16.2531 20.0227C13.4283 19.7158 10.7149 18.7505 8.33778 17.2089C6.11822 15.7985 4.23642 13.9167 2.83016 11.7036C1.27877 9.30881 0.313305 6.58224 0.0106481 3.73117C-0.0555786 2.99831 0.189263 2.27136 0.685364 1.72789C1.18146 1.18442 1.88314 0.874489 2.61981 0.873795L5.23266 0.873838C6.54844 0.860888 7.66995 1.82538 7.8552 3.13632C7.95723 3.9099 8.14644 4.66946 8.4185 5.39853C8.7786 6.35651 8.54828 7.43645 7.82522 8.16763L7.19862 8.79423C8.2261 10.4061 9.59387 11.7739 11.2058 12.8014L11.8358 12.1713C12.5635 11.4517 13.6435 11.2214 14.5995 11.5807C15.3305 11.8535 16.0901 12.0428 16.8715 12.1458C18.1856 12.3312 19.1531 13.4691 19.1262 14.7947L19.1262 17.4028ZM16.6351 13.8774C17.0667 13.9383 17.3898 14.3197 17.3785 14.7849V17.4064C17.3796 17.656 17.2768 17.891 17.0955 18.0574C16.9142 18.2237 16.6711 18.3059 16.4261 18.2838C13.8888 18.0079 11.4365 17.1355 9.28186 15.7383C7.27205 14.4611 5.57384 12.7629 4.30104 10.7599C2.89476 8.58901 2.02217 6.12474 1.74984 3.56026C1.72911 3.32961 1.81072 3.08729 1.97609 2.90613C2.14145 2.72498 2.37534 2.62167 2.62063 2.62144L5.24125 2.62144C5.68845 2.61708 6.06228 2.93858 6.12367 3.37288C6.24183 4.2691 6.46301 5.15696 6.78188 6.0115C6.90265 6.33279 6.82588 6.69277 6.58601 6.93534L5.47971 8.04162C5.20156 8.31977 5.14355 8.74948 5.33799 9.09142C6.65966 11.4158 8.5842 13.3403 10.9086 14.662C11.2505 14.8564 11.6802 14.7984 11.9584 14.5203L13.0681 13.4105C13.3072 13.1741 13.6672 13.0973 13.9865 13.2174C14.843 13.537 15.7309 13.7582 16.6351 13.8774Z" fill="#FF3B30"/>
                </svg>
              </div>
            </div>
            <div class="descr">
              <div  class="name" :class="{ error : user.findConversation }"> {{user.name}} </div>
              <div class="user"> {{user.descr}} </div>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div class="right-content__region">
            <p class="text"> {{user.type}} </p>
            <img v-if="user.countryLesson" class="image-region" :src="getImgUrl(`./flags/${user.countryLesson}.png`)" alt="страна">
            <div class="menu" @click="user.openTabMenu = !user.openTabMenu">
              <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="black"/>
              </svg>
            </div>
            <div class="tab-menu" v-if="user.openTabMenu">
              <ul class="tab-list">
                <li class="tab-list__item">Сохранить</li>
                <li class="tab-list__item">Перейти</li>
                <li class="tab-list__item">В избранное</li>
                <li class="tab-list__item">Удалить</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: [
        {
          title: "Октябрь 2018",
          users: [
            {
              date: {
                day: 18,
                month: "Октября",
                times: "18:00 - 20:00"
              },
              country: "belarus",
              userImg: "user1",
              countryLesson: "germany",
              name: "Иван Сокольский",
              descr: "24 года, Россия, среднее образование",
              findConversation: false,
              type: "Беседа",
              openTabMenu: false
            },
            {
              date: {
                day: 17,
                month: "Октября",
                times: "18:00 - 20:00"
              },
              country: "germany",
              userImg: "user2",
              countryLesson: "russia",
              name: "Константин Константинопольский",
              descr: "24 года, Россия, Высшее образование, Профессиональный репетитор",
              findConversation: false,
              type: "Урок",
              openTabMenu: false
            },
            {
              date: {
                day: 17,
                month: "Октября",
                times: "19:00 - 20:00"
              },
              country: "belarus",
              userImg: "user3",
              countryLesson: "usa",
              name: "Анна Петрова",
              descr: "24 года, Россия, среднее образование",
              findConversation: false,
              type: "Беседа",
              openTabMenu: false
            }
          ]
        },
        {
          title: "Ноябрь 2018",
          users: [
            {
              date: {
                day: 15,
                month: "Ноябрь",
                times: "18:00 - 20:00"
              },
              country: "belarus",
              userImg: "user-none",
              countryLesson: "usa",
              name: "Поиск собеседника",
              descr: "Любой пол, среднее образование",
              findConversation: true,
              type: "Беседа",
              openTabMenu: false
            },
            {
              date: {
                day: 17,
                month: "Ноябрь",
                times: "18:00 - 20:00"
              },
              country: "belarus",
              userImg: "user4",
              countryLesson: "russia",
              name: "Катерина Иванова",
              descr: "44 года, Россия, Высшее образование, Профессиональный реп...",
              findConversation: false,
              type: "Беседа",
              status: "Согласование",
              openTabMenu: false
            }
          ]
        },
      ],
      tabMenuActive: false,
      isActiveButton: false
    }
  },
  methods: {
    getImgUrl(fileName) {
      const images = require.context('@/assets/images/', true, /\.(png|jpe?g|svg)$/); // в конце перечисляешь типы файлов
      return images(fileName);
    },
  }
};
</script>

<style lang="scss">
.calendar-body-content {
  .title-table {
    width: 100%;
    font-size: 12px;
    line-height: 22px;
    text-transform: uppercase;
    color: #8E8E93;
    background: #F9F8FC;
    border-radius: 5px;
    padding: 7px 14px;
    margin-top: 40px
  }
  .info-tible {
    display: flex;
    justify-content: space-between;
    padding: 35px 0;
    border-bottom: 1px solid #E5E5EA;
    &:last-child {
      border-bottom: none;
    }
    .left-content {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 980px) {
        flex-direction: column;
        position: relative;
      }
      &__date {
        display: flex;
        align-items: center;
        .date {
          font-weight: 500;
          font-size: 50px;
          line-height: 20px;
        }
        .times {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          min-width: 120px;
        }
      }
      &__info {
        display: flex;
        margin-left: 25px;
        position: relative;
        @media screen and (max-width: 980px) {
          margin-left: 0px;
          margin-top: 16px;
        }
        .avatars {
          white-space: nowrap;
          padding-right: 20px;
          @media screen and (max-width: 980px) {
            width: 30%;
          }
        }
        .user-img {
          margin-left: -25px;
        }
        .none-user {
          position: absolute;
          left: 42px;
          top: 19px;
        }
        .descr {
          font-size: 13px;
          @media screen and (max-width: 980px) {
            width: 70%;
          }
          .name {
            color: #103D97;
            font-weight: 500;
            font-size: 15px;
          }
          .error  {
            color: #FF3B30;
          }
        }
      }
    }
    .status {
      color: #FF3B30;
    }
    .right-content {
      @media screen and (max-width: 768px) {
        position: absolute;
        right: 0;
      }
      &__region {
        display: flex;
        align-items: center;
        position: relative;
        .text, .menu {
          margin: 0 24px;
          @media screen and (max-width: 980px) {
            margin: 0 10px;
          }
        }
        .menu {
          cursor: pointer;
        }
        .image-region {
          @media screen and (max-width: 980px) {
            width: 30px;
          }
        }
        .tab-menu {
          position: absolute;
          bottom: -177px;
          text-align: left;
          transition: top .5s ease-in-out;
          right: 21px;
          width: 200px;
          height: 160px;
          background-color: #f6f6f6;
          box-shadow: 0 0 15px #eeedee;
          z-index: 1000;
          .tab-list {
            &__item {
              padding: 10px 10px;
              cursor: pointer;
              &:hover {
                color: #103D97;
              }
            }
          }
        }
      }
    }
  }
}
</style>>