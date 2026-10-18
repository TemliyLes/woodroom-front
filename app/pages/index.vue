<template>
  <Container>
    <Flex :gap="4" align="stretch" class="mt-4">
      <div class="flex-1 min-w-0">Первый блок</div>

      <div class="flex-1 min-w-[768px]"><Slider /></div>
    </Flex>
    <HeroGroup />
    <div class="w-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro
      ex a iste, quisquam vitae, fuga minima illum nemo aliquam in
      necessitatibus, eligendi consectetur. Nulla consequuntur asperiores, illo
      voluptatibus animi fugit hic nobis mollitia pariatur perferendis quam vero
      quia dignissimos possimus fuga sit officia rerum. Officia, ducimus.
      Pariatur nemo, eum quidem possimus neque, aspernatur itaque enim amet
      doloremque at tenetur odit ad nulla sequi quaerat? Provident sunt ad in
      facilis libero pariatur quae veritatis dolores laboriosam qui quos quam
      quisquam beatae assumenda ab quod consequatur nesciunt ducimus quidem
      similique nisi, ipsum cum animi voluptatem. Ullam nostrum ut totam nulla
      fugiat commodi ipsa animi odit corporis quam. Deleniti sequi mollitia
      molestias quod, vel, possimus sunt enim eligendi esse corporis iure. Culpa
      quibusdam vel quo inventore omnis laboriosam aut, dolorum tempore nihil ad
      molestias accusamus sint, quam vitae. Autem nulla ut officia iure aliquam
      asperiores velit reiciendis nisi quis deserunt unde et corrupti, delectus
      error odit laboriosam, quo sunt veritatis? Cupiditate fugit perferendis
      perspiciatis dolore necessitatibus architecto laudantium magni corrupti. A
      blanditiis molestiae non omnis odit provident quas minus deleniti sint
      enim sed commodi quibusdam expedita quaerat, iste temporibus facere
      debitis vitae optio illum impedit placeat quis! Quisquam, nulla autem
      maxime laborum vitae dolores, doloribus est dolorum praesentium expedita
      iusto ipsum, tenetur ratione repellat sunt tempora! Officiis velit
      consequatur distinctio! Distinctio blanditiis vel quos? Deleniti, ullam
      rem sunt debitis fugiat modi hic ab accusamus, harum consectetur
      excepturi? Qui dolorum vitae nostrum rerum sit accusamus totam ut
      repellendus tempore aliquam nam, reiciendis quidem cupiditate nobis, amet
      iste temporibus? Incidunt assumenda, illo praesentium aperiam excepturi,
      nesciunt nulla voluptatum tenetur illum maiores officiis laboriosam alias
      corrupti at non et ab veritatis consequuntur soluta suscipit quis labore
      quam numquam veniam. Alias quos facilis saepe odio quae sit voluptates
      voluptate facere voluptatum, deserunt quidem delectus perferendis aut.
    </div>
  </Container>
</template>

<script setup>
import Container from "~/components/basic/Container.vue";
import Slider from "~/components/slider/index.vue";
import Flex from "~/components/basic/Flex.vue";
import HeroGroup from "~/components/configurator/HeroGroup.vue";
</script>
