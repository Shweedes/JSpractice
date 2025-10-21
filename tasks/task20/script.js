const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

const maxDepth = function(root) {
    if(root === null) {
        return 0
    }

    const depthLeft = maxDepth(root.left)
    const depthRight = maxDepth(root.right)

    return Math.max(depthLeft, depthRight) + 1
};

console.log(maxDepth(root))