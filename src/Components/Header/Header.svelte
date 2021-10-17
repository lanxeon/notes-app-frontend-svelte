<script lang="ts">
  export let authenticated: boolean = false;
  export let accountName: string = "account";
  export let accountImage: string =
    "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";

  export let openLoginModal: () => void = () => {};
  export let openSignupModal: () => void = () => {};
</script>

<header>
  <div class="header-content">
    <h1>Notes App</h1>

    {#if authenticated}
      <div class="account">
        <div class="image-container">
          <img src={accountImage} alt="account avatar" />
        </div>
        <span>{accountName}</span>
      </div>
    {:else}
      <nav>
        <ul class="nav-list">
          <li>
            <button on:click={openLoginModal}> Login </button>
          </li>
          <li>
            <button on:click={openSignupModal}> Signup </button>
          </li>
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 80px;
    background-color: #2196f3;
    color: #fff;
    z-index: 999;

    .header-content {
      padding: 12px 18px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;

      h1 {
        margin: 0;

        @media screen and (max-width: 900px) {
          font-size: 1.5em;
        }
        @media screen and (max-width: 600px) {
          font-size: 1em;
        }
      }

      .account {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        .image-container {
          position: relative;
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      nav {
        height: 100%;
      }

      .nav-list {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0;

        li {
          margin: 0 8px;

          button {
            background-color: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            height: 100%;
            margin: 0;
            padding: 6px;
            height: 100%;
          }
        }
      }
    }
  }
</style>
