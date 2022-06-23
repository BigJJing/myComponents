<template>
    <el-dialog v-model="visible" title="xxx" width="30%">
        xxx
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submit">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
    import { ref, defineExpose } from 'vue'

    const visible = ref(false);
    const submit = () => {

    }
    
    defineExpose({
        visible
    })
</script>