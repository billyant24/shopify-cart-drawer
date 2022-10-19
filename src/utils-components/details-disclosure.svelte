<script lang="ts">
  export let isOpen: boolean = false

  export let disclosureName: string = ""
</script>

<details open={isOpen}>
  <summary><span class="disclosure-name">{disclosureName}</span></summary>
  <slot />
</details>

<style lang="scss">
  details {
    display: block;
  }

  .disclosure-name {
    margin-left: 6px;
  }

  summary {
    font-weight: 600;
    font-size: small;
    cursor: pointer;
  }

  details[open] {
    padding: 0;
  }

  // details[open] summary {
  // 	margin-bottom: 0.5em;
  // }
</style>
