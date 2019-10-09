<template>
  <div class="combine-js">
    <SmartForm
      :tip='tip'
      labelWidth='100px'
      :form='form'
      :operation='submit'
      v-on:clear-files='clearFiles'
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
          <el-select v-model='form.fileType'>
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
import { combine } from '@/apis/combine'
export default {
  name: 'Combine',
  components: {
    SmartForm
  },
  data () {
    return {
      url: '',
      fileList: [],
      form: {
        fileType: ''
      },
      tip: '上传文件 然后合并成一个js/csv 格式文件'
    }
  },
  methods: {
    submit (formName) {
      let formData = new FormData()
      this.$refs.upload.uploadFiles.forEach(file => {
        formData.append('uploadFile', file.raw)
      })
      formData.append('fileType', this.form.fileType)
      combine(formData)
        .then(res => {
          if (res.data === 'ok') {
            this.$message({
              type: 'success',
              message: '文件转换成功'
            })
          }
        }).catch(e => {
          this.$message({
            type: 'error',
            message: e.message
          })
        })
    },
    clearFiles () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
