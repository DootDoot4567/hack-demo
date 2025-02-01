<script>
    import Card from './card.svelte'
    export let item
</script>

<Card>
    <div class = "num-display">
        {item.rating}
    </div>
    <div class="close">X</div>y
    <p class="text-display">
        {item.text}
    </p>
</Card>
