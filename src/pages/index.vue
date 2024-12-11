<script setup lang="ts">
import UFooter from "@/components/UFooter.vue";
import UHeader from "@/components/UHeader.vue";
import HomeBlock from "@/components/home/HomeBlock.vue";

const boroccoImages = [
  {
    name: "Натюрморт с цветами в стеклянной вазе",
    imgUrl: "https://sr.gallerix.ru/B/1253397642/1396054681.jpg",
  },
  {
    name: "Молочница",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Johannes_Vermeer_-_De_melkmeid.jpg",
  },
  {
    name: "Ночной дозор",
    imgUrl:
      "https://3dprintingindustry.com/wp-content/uploads/2019/07/106926ff-9efa-11e9-abcc-02b7b76bf47f.jpg",
  },
];

const sculptImages = [
  {
    name: "Бюст Андриса де Греффа",
    imgUrl:
      "https://i.pinimg.com/736x/96/bc/08/96bc085a92cb4b84cc1ffabedeb7db0a--amsterdam-marbles.jpg",
  },
  {
    name: "Сидящий купидон",
    imgUrl:
      "https://i.pinimg.com/736x/23/16/05/231605e0e3d70b47a2eca67a8c2e471d.jpg",
  },
  {
    name: "Портрет Корнелиса Апостола",
    imgUrl:
      "https://www.arte.go.it/wordpress/wp-content/uploads/2021/05/il-restauro-del-san-marco-di-donatello-fa-riemergere-tracce-di-doratura-sulla-chioma-e-sulla-barba_02.jpg",
  },
];

const authorImages = [
  {
    name: "Альбрехт Дюрер",
    imgUrl:
      "https://avatars.mds.yandex.net/get-entity_search/2361982/990910511/SUx182_2x",
  },
  {
    name: "Винсент Ван Гог",
    imgUrl:
      "https://avatars.mds.yandex.net/get-entity_search/1528499/829400527/SUx182_2x",
  },
  {
    name: "Рембрандт Харменс ван Рейн",
    imgUrl:
      "https://avatars.mds.yandex.net/get-entity_search/1938771/1022023362/SUx182_2x",
  },
];
</script>

<template>
  <UHeader title="О проекте" />
  <HomeBlock
    title="Живопись барроко"
    description="Живопись барокко поражает своей эмоциональной силой и драматизмом. От Караваджо до Рубенса — каждая картина рассказывает уникальную историю."
    category-href="/gallery"
    :images="boroccoImages"
  />
  <HomeBlock
    title="Скульптуры классицизма"
    description=" Элегантные работы, вдохновленные античностью. От мраморных бюстов до величественных статуй — каждая скульптура отражает поиск идеала."
    category-href="/gallery"
    :is-even="true"
    img-height="Big"
    :images="sculptImages"
  />
  <HomeBlock
    title="Авторы"
    description="Познакомьтесь с мастерами, которые определили развитие искусства. Узнайте об их жизни и работах, которые вдохновляют и сегодня."
    category-href="/authors"
    :images="authorImages"
  />
  <UFooter />
</template>
