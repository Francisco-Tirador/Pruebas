<?php
class Sesiones extends Conexion {
	public function __construct() {
		parent::__construct();
		$this->setTabla("sesionesmensuales");
	}

	public function getAllSesiones() {
		$sql = "SELECT * FROM sesionesmensuales WHERE 1 order by fecha_hora_inicio DESC ";
		$sentencia = $this->conexion_db->prepare($sql);
		$sentencia->execute(array());
		$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
		return $resultado;
	}

	public function getVideoSesion($id_sesion) {
		$sql = "SELECT * FROM sesionesmensuales WHERE id=".$id_sesion;
		$sentencia = $this->conexion_db->prepare($sql);
		$sentencia->execute(array());
		$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
		return $resultado;
	}






	public function getAllConferencias() {
		$sql = "SELECT * FROM sesionesmensuales WHERE 1 order by fecha_hora_inicio asc ";
		$sentencia = $this->conexion_db->prepare($sql);
		$sentencia->execute(array());
		$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
		return $resultado;
	}

	public function getPonentesByConferencia($ids_ponentes) {
		$sql = "SELECT * FROM ponentes WHERE id in (0," . $ids_ponentes . ") ";
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function proximaTransmision() {
			$sql = "SELECT count(id) as existe,   id, tema as conferencia, descripcion, temario, fecha_hora_inicio, fecha_hora_fin, fecha_texto, canal1, canal2   FROM sesionesmensuales WHERE fecha_hora_inicio>='" . date("Y-m-d H:i:s") . "' ORDER BY fecha_hora_inicio asc LIMIT 1";
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}
		public function proximaTransmision2() {
			$sql = "SELECT count(id) as existe,   id, tema as conferencia, descripcion, temario, fecha_hora_inicio, fecha_hora_fin, fecha_texto, canal1, canal2   FROM congreso WHERE fecha_hora_inicio>='" . date("Y-m-d H:i:s") . "' ORDER BY fecha_hora_inicio asc LIMIT 1";
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function transmisionActual() {
			$sql = "SELECT count(id) as live, id, tema as conferencia, descripcion, temario, fecha_hora_inicio, fecha_hora_fin, fecha_texto, canal1, canal2   FROM sesionesmensuales WHERE '" . date('Y-m-d H:i:s') . "' >= fecha_hora_inicio and '" . date('Y-m-d H:i:s') . "' <= fecha_hora_fin ";
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}
		public function transmisionActual2() {
			$sql = "SELECT count(id) as live, id, tema as conferencia, descripcion, temario, fecha_hora_inicio, fecha_hora_fin, fecha_texto, canal1, canal2   FROM congreso WHERE '" . date('Y-m-d H:i:s') . "' >= fecha_hora_inicio and '" . date('Y-m-d H:i:s') . "' <= fecha_hora_fin ";
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function getConferenciaById($id) {
			$sql = "SELECT *  FROM sesionesmensuales WHERE id=" . $id;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function transmisionVista($modulo_id, $usuario_id) {
			$sql = "SELECT count(*) as visto, tiempo, id FROM progresos_transmision WHERE usuario_id=" . $usuario_id . " and modulo_id=" . $modulo_id;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function videoVista($video_id, $usuario_id) {
			$sql = "SELECT count(*) as visto, minutos as tiempo, id FROM progresos_videos WHERE usuario_id=" . $usuario_id . " and video_id=" . $video_id;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function getMensajes($modulo, $time) {
			$fecha_hora = date('Y-m-d H:i:s', $time);
			$sql = "SELECT m.id, m.mensaje, m.fecha_hora, u.nombre, u.apellidos, m.usuario_id FROM messenger as m INNER JOIN alumnos as u ON u.id=m.usuario_id WHERE m.fecha_hora>='" . $fecha_hora . "' AND m.modulo_id=" . $modulo;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function getAlltransimision() {
			$sql = "SELECT v.id, v.orden, v.tema, v.ponente, v.url, v.duracion, m.modulo, v.tipo FROM videos as v INNER JOIN modulos as m ON v.modulo_id=m.id";
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function getTransmisionById($id) {
			$sql = "SELECT v.id, v.orden, v.tema, v.ponente, v.url, v.duracion, m.modulo, v.tipo, m.id as id_modulo FROM videos as v INNER JOIN modulos as m ON v.modulo_id=m.id where v.id=" . $id;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			return $resultado;
		}

		public function getProgresoVideo($video, $ususario, $minutos) {
			$sql = "SELECT count(id) as progreso, minutos, completo FROM progresos_videos WHERE video_id=" . $video . " and usuario_id=" . $ususario;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			$progreso = 0;
			if ($resultado->progreso) {
				if ($resultado->completo) {
					$progreso = 100;
				} else {
					$progreso = ($resultado->minutos / $minutos) * 100;
					if ($progreso >= 98) {
						$progreso = 100;
					}
				}
			} else {
				$resultado->completo = 0;
				$resultado->minutos = 0;
			}
			$resultado->progreso = ceil($progreso);
			return $resultado;
		}

		public function getProgresoTransmision($modulo, $ususario, $duracion = 120) {
			$sql = "SELECT count(id) as visto, tiempo FROM progresos_transmision WHERE modulo_id=" . $modulo . " and usuario_id=" . $ususario;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			$progreso = 0;
			if ($resultado->visto) {
				$progreso = ($resultado->tiempo / $duracion) * 100;
				if ($progreso >= 98) {
					$progreso = 100;
				}
			}
			return ceil($progreso);
		}

		public function getProgresoTransmisionTiempoVisto($modulo, $ususario, $duracion = 120) {
			$sql = "SELECT count(id) as visto, tiempo FROM progresos_transmision WHERE modulo_id=" . $modulo . " and usuario_id=" . $ususario;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			$progreso = 0;
			if ($resultado->visto) {
				$progreso = $resultado->tiempo;
			} else {
				$progreso = 0;
			}
			return ($progreso);
		}
		public function getProgresoTransmisionCongreso($modulo, $ususario, $duracion = 120) {
			$sql = "SELECT count(id) as visto, tiempo FROM progresos_transmision_congreso WHERE modulo_id=" . $modulo . " and usuario_id=" . $ususario;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
			$progreso = 0;
			if ($resultado->visto) {
				$progreso = $resultado->tiempo;
			} else {
				$progreso = 0;
			}
			return ($progreso);
		}

		public function getProgresoModulo($modulo, $ususario) {
		// $sql = "SELECT count(id) as progreso, minutos, completo FROM progresos_videos WHERE modulo_id=" . $modulo . " and usuario_id=" . $ususario;
			$sql = "SELECT SUM(pv.minutos) as minuts FROM progresos_videos as pv INNER JOIN videos as v ON v.id = pv.video_id WHERE v.modulo_id=".$modulo."  AND pv.usuario_id =".$ususario;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetch(PDO::FETCH_OBJ);

			if($resultado->minuts != NULL) {
				$progreso = $resultado->minuts;
			} else {
				$progreso = 0;
			}


			return $progreso;
		}

		public function getTema($fecha){
			$sql = "SELECT * FROM sesionesmensuales WHERE date(fecha_hora_inicio)='".$fecha."'" ;
			$sentencia = $this->conexion_db->prepare($sql);
			$sentencia->execute(array());
			$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
			return $resultado;
		}

	}

?>