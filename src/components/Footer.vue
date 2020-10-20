<template>
  <!-- Footer -->
  <mdb-footer style="background-color:#013D40" class="font-small pt-4 mt-4">
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        <mdb-row>
        <mdb-col sm="6">
          <p><strong><mdb-icon icon="heart"/> 2020</strong></p>
        </mdb-col>
        <mdb-col sm="6">
          <p><strong><mdb-icon icon="copyright"/> PanitApp - UN</strong></p>
        </mdb-col>
      </mdb-row>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol, 
      mdbIcon
    }
  }
</script>