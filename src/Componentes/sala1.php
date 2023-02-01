<style type="text/css">

#global {
    height: 400px;
    width:100% ;
    overflow-y: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

.new-gradient {
    background: rgb(88,46,139) !important;
    background: linear-gradient(95deg, rgba(88,46,139,1) 0%, rgba(174,142,221,1) 100%) !important;
}

</style>
<?php
$transmision = $Sesiones->transmisionActual( );
if (!$transmision->live) {
$transmision = $Sesiones->proximaTransmision( );
}
?>
<div class="page-content">
<br><br>
<div class="uk-grid-collapse" uk-grid>
<div class="uk-width-4-4@m bg-white">


    <br><br><br>
    <br><br><br>
    <center>


        <br>


        <?php
        $transmision = $Sesiones->transmisionActual( );
        if ($transmision->live) {?>
            <h2>En vivo: <?php echo $transmision->conferencia; ?></h2>
        <?php } else {
         ?>
         <?php
         $transmision = $Sesiones->proximaTransmision( );
         if ($transmision->existe) {?>
           <h2>
            Evento: <br>
            <!-- <?php echo strtoupper(strftime("%A %d de %B %H:%M ", strtotime($transmision->fecha_hora_inicio))); ?> -->

            <!-- Hrs.  -->
            <?php echo $transmision->conferencia; ?>

        </h2>
    <?php } else { ?>

    <?php }
}?>

<br>
<br>
<!-- <a href="https://us02web.zoom.us/j/82864702178?pwd=UnErMncvbGs0eVJFOTN5QlRiS3hidz09" target="_blank" class="uk-button uk-button-primary uk-button-large">Ingresa a la sesión aquí</a> -->
<a  target="_blank" class="uk-button uk-button-primary uk-button-large " style="color:#fff;">Próximamente</a>

</center>
<br><br><br>

<br><br><br>
<br><br><br>
<br><br><br>




</div>







</div>







</div>

