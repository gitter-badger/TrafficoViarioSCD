with GNATCOLL.JSON;

with strade_e_incroci_common;
with data_quartiere;
with remote_types;

use GNATCOLL.JSON;

use strade_e_incroci_common;
use data_quartiere;
use remote_types;

package risorse_mappa_utilities is

   type intersezione_incrocio is tagged private;
   type intersezioni_incrocio is array(Positive range <>) of intersezione_incrocio;
   type ptr_intersezioni_incrocio is access intersezioni_incrocio;
   type traiettoria_incrocio is tagged private;
   type traiettorie_incrocio is array(traiettoria_incroci_type range traiettoria_incroci_type'First..traiettoria_incroci_type'Last) of traiettoria_incrocio;

   function create_array_urbane(json_roads: JSON_array; from: Natural; to: Natural) return strade_urbane_features;

   function create_array_ingressi(json_roads: JSON_array; from: Natural; to: Natural) return strade_ingresso_features;

   function create_array_incroci_a_4(json_incroci: JSON_array; from: Natural; to: Natural) return list_incroci_a_4;

   function create_array_incroci_a_3(json_incroci: JSON_array; from: Natural; to: Natural) return list_incroci_a_3;
   -- nel JSON la numerazione delle mancanti parte da 0; qui si fa partire da 1 quindi viene messo +1. DA SISTEMARE

   function create_array_rotonde_a_4(json_incroci: JSON_array; from: Natural; to: Natural) return list_incroci_a_4;

   function create_array_rotonde_a_3(json_incroci: JSON_array; from: Natural; to: Natural) return list_incroci_a_3;

   function create_traiettorie_incrocio(json_traiettorie: JSON_Value) return traiettorie_incrocio;

   function create_traiettoria_incrocio(lunghezza: Float; corsia_arrivo: id_corsie; corsia_partenza: id_corsie;
                                           intersezioni: ptr_intersezioni_incrocio) return traiettoria_incrocio;

   function create_intersezione_incrocio(traiettoria: traiettoria_incroci_type; distanza: Float) return intersezione_incrocio;

   procedure print_percorso(route: percorso);

   type list_mancanti_incroci_a_3 is array(Positive range <>) of Positive;

   function get_mancante_incrocio_a_3(id_incrocio: Positive) return Positive;

private

   indici_strada_mancanti: list_mancanti_incroci_a_3(get_from_incroci_a_3..get_to_incroci_a_3);

   type intersezione_incrocio is tagged record
      traiettoria: traiettoria_incroci_type;
      distanza: Float;
   end record;

   type traiettoria_incrocio is tagged record
      lunghezza: Float;
      corsia_arrivo: id_corsie;
      corsia_partenza: id_corsie;
      intersezioni: ptr_intersezioni_incrocio;
   end record;

end risorse_mappa_utilities;
