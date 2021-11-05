<script lang="ts">
  import Checkbox from "../Checkbox/Checkbox.svelte";

  export let headerText: string = "HEADER";
  export let content: string = "";
  export let type: "HOME" | "WORK" | "PERSONAL" | "NONE" = "NONE";
  export let footerContent: string = "";

  $: colorClass =
    type === "HOME"
      ? "orange"
      : type === "WORK"
      ? "purple"
      : type === "PERSONAL"
      ? "green"
      : "";
</script>

<div class="card-wrapper">
  <div class={`card-wrapper__card ${colorClass}`}>
    <div class="card-wrapper__card__header">
      <div class="card-wrapper__card__header__left">
        <Checkbox
          checked={false}
          onChange={() => {
            console.log("HELLO");
          }}
        />
        <h3>{headerText}</h3>
      </div>
      <div class="card-wrapper__card__header__right">
        <img src="/assets/edit.svg" alt="edit-icon" />
        <img src="/assets/trash.svg" alt="delete-icon" />
      </div>
    </div>
    <div class="card-wrapper__card__content">
      <p>{content}</p>
    </div>
    <div class="card-wrapper__card__footer">
      <p>{footerContent}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    padding: 12px 8px;
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 600px) {
      max-width: 100%;
      flex-basis: 100%;
    }

    &__card {
      width: 100%;
      height: 174px;
      // border: 1px solid #ccc;
      border: none;
      box-shadow: 0px 3px 6px #00000029;
      background-color: #00000029;
      color: #fff;
      position: relative;

      &.green {
        background-color: #66bb6a;
      }
      &.orange {
        background-color: #ff9100;
      }
      &.purple {
        background-color: #5c6bc0;
      }

      &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.8rem 1rem;

        &__left {
          display: flex;
          flex-direction: row;
          align-items: center;

          h3 {
            margin: 0;
            font-weight: 500;
            font-size: 1.25rem;
            margin-left: 1.2rem;
            line-height: 1.625rem;
          }
        }

        &__right {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          img {
            width: 1.125rem;
            height: 1.125rem;
            cursor: pointer;

            margin: 0 0.6rem;
          }
        }
      }

      &__content {
        font-size: 0.875rem;
        line-height: 19px;
        opacity: 80%;

        text-overflow: ellipsis;
        margin: 0.5rem 1rem;

        /* Needed to make it work */
        overflow: hidden;
        white-space: nowrap;

        p {
          margin: 0.5rem 0;
          text-align: left;
          font-weight: normal;
        }
      }

      &__footer {
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: left;
        margin: 0 1rem;
        padding: 0.5rem 0;

        p {
          margin: 0;
          font-size: 0.93rem;
          opacity: 60%;
          font-weight: 500;
        }
      }
    }
  }
</style>
