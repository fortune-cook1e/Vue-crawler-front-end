<template>
  <div class="convert">
    <SmartForm
      :tip='tip'
      labelWidth='100px'
      :form='form'
      :operation='upload'
    >
      <template v-slot:file>
        <el-form-item label='上传文件'>
          <el-upload
            ref='upload'
            :action='url'
            :auto-upload='false'
            :file-list='fileList'
            multiple
            required
          >
            <el-button slot='trigger' type='primary'>
              选取文件
            </el-button>
          </el-upload>
        </el-form-item>
      </template>

      <template v-slot:fileType>
        <el-form-item label='输出格式类型'>
          <el-select v-model='form.type'>
            <el-option label='js' value='js'></el-option>
            <el-option label='csv' value='csv'></el-option>
          </el-select>
        </el-form-item>
      </template>
    </SmartForm>
  </div>
</template>

<script>
import SmartForm from '@/components/SmartForm.vue'
import { convert } from '@/apis/convert'
export default {
  name: 'Convert',
  components: {
    SmartForm
  },
  data () {
    return {
      url: 'http://localhost:3000/convert',
      fileList: [],
      form: {
        type: ''
      },
      tip: '上传csv/js格式文件，将其转换为js/csv文件(可多选)'
    }
  },
  methods: {
    upload () {
      const formData = new FormData()
      this.$refs.upload.uploadFiles.forEach(file => {
        formData.append('uploadFiles', file.raw)
      })
      formData.append('type', this.form.type)
      convert(formData)
        .then(res => {
          if (res.data === 'ok') {
            this.$message({
              type: 'success',
              message: 'csv格式文件转换成功'
            })
          }
        }).catch(e => {
          this.$message({
            type: 'error',
            message: e.message
          })
        })
    }
  }
}
</script>
