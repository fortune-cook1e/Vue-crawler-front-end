<template>
  <div class="form">

    <el-alert
      :title="tip"
      :type='tipType'
    />

    <el-form :model='form' ref='form' :label-width='labelWidth' :style="{width:'450px'}">

      <!-- 日期插槽 -->
      <slot name='date'></slot>

      <!-- 国家插槽 -->
      <slot name='country'></slot>

      <!-- 文件上传插槽 -->
      <slot name='file'></slot>

      <!-- 输出文件类型插槽 -->
      <slot name='fileType'></slot>

      <el-form-item>
        <el-button type='primary' @click.prevent="operation('form')">
          提交数据
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    tip: {
      type: String,
      required: true
    },
    tipType: {
      type: String,
      default: 'warning'
    },
    form: {
      type: Object,
      required: true
    },
    operation: {
      type: Function,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  }
}
</script>
