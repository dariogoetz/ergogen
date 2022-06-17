
module.exports = {
  nets: {
    A0: 'A0',
    A1: 'A1',
    A10: 'A10',
    A11: 'A11',
    A12: 'A12',
    A15: 'A15',
    A2: 'A2',
    A3: 'A3',
    A4: 'A4',
    A5: 'A5',
    A6: 'A6',
    A7: 'A7',
    A8: 'A8',
    A9: 'A9',
    B0: 'B0',
    B1: 'B1',
    B10: 'B10',
    B12: 'B12',
    B13: 'B13',
    B14: 'B14',
    B15: 'B15',
    B2: 'B2',
    B3: 'B3',
    B4: 'B4',
    B5: 'B5',
    B6: 'B6',
    B7: 'B7',
    B8: 'B8',
    B9: 'B9',
    C13: 'C13',
    C14: 'C14',
    C15: 'C15',
    GND: 'GND',
    R: 'R',
    VCC: 'VCC',
    RAW: 'RAW',
    VB: 'VB',
  },
  params: {
    class: 'MCU',
    orientation: 'down',
    side: 'F'
  },
  body: p => {
    function standard(side) {
      return `
        (module Blackpill (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    
        ${''/* component outline */}
        (fp_line (start 0.00 8.89) (end 52.81 8.89) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 52.81 8.89) (end 52.81 -8.89) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 52.81 -8.89) (end 0.00 -8.89) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 0.00 -8.89) (end 0.00 8.89) (layer ${side}.SilkS) (width 0.15))
      `
    }
    function pins(def_neg, def_pos, side) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start 0.53 ${def_pos}6.35) (end 3.07 ${def_pos}6.35) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 0.53 ${def_pos}6.35) (end 0.53 ${def_pos}8.89) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 3.07 ${def_pos}6.35) (end 3.07 ${def_pos}8.89) (layer ${side}.SilkS) (width 0.15))
      
        ${''/* pin names */}
        (fp_text user RAW (at 1.80 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 4.34 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at 6.88 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B10 (at 9.42 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B2 (at 11.96 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B1 (at 14.50 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B0 (at 17.04 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A7 (at 19.58 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A6 (at 22.12 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A5 (at 24.66 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A4 (at 27.20 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A3 (at 29.74 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A2 (at 32.28 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A1 (at 34.82 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A0 (at 37.36 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user R (at 39.90 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C15 (at 42.44 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C14 (at 44.98 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C13 (at 47.52 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VB (at 50.06 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B12 (at 1.80 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B13 (at 4.34 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B14 (at 6.88 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B15 (at 9.42 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A8 (at 11.96 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A9 (at 14.50 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A10 (at 17.04 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A11 (at 19.58 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A12 (at 22.12 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A15 (at 24.66 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B3 (at 27.20 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B4 (at 29.74 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B5 (at 32.28 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B6 (at 34.82 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B7 (at 37.36 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B8 (at 39.90 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B9 (at 42.44 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RAW (at 44.98 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 47.52 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at 50.06 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        ${''/* and now the actual pins */}
        (pad 1 thru_hole circle (at 1.80 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RAW.str})
        (pad 2 thru_hole circle (at 4.34 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 3 thru_hole circle (at 6.88 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
        (pad 4 thru_hole circle (at 9.42 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B10.str})
        (pad 5 thru_hole circle (at 11.96 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B2.str})
        (pad 6 thru_hole circle (at 14.50 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B1.str})
        (pad 7 thru_hole circle (at 17.04 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B0.str})
        (pad 8 thru_hole circle (at 19.58 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A7.str})
        (pad 9 thru_hole circle (at 22.12 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A6.str})
        (pad 10 thru_hole circle (at 24.66 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A5.str})
        (pad 11 thru_hole circle (at 27.20 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A4.str})
        (pad 12 thru_hole circle (at 29.74 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A3.str})
        (pad 13 thru_hole circle (at 32.28 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A2.str})
        (pad 14 thru_hole circle (at 34.82 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A1.str})
        (pad 15 thru_hole circle (at 37.36 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A0.str})
        (pad 16 thru_hole circle (at 39.90 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.R.str})
        (pad 17 thru_hole circle (at 42.44 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C15.str})
        (pad 18 thru_hole circle (at 44.98 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C14.str})
        (pad 19 thru_hole circle (at 47.52 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C13.str})
        (pad 20 thru_hole circle (at 50.06 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VB.str})
        (pad 21 thru_hole circle (at 1.80 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B12.str})
        (pad 22 thru_hole circle (at 4.34 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B13.str})
        (pad 23 thru_hole circle (at 6.88 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B14.str})
        (pad 24 thru_hole circle (at 9.42 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B15.str})
        (pad 25 thru_hole circle (at 11.96 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A8.str})
        (pad 26 thru_hole circle (at 14.50 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A9.str})
        (pad 27 thru_hole circle (at 17.04 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A10.str})
        (pad 28 thru_hole circle (at 19.58 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A11.str})
        (pad 29 thru_hole circle (at 22.12 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A12.str})
        (pad 30 thru_hole circle (at 24.66 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A15.str})
        (pad 31 thru_hole circle (at 27.20 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B3.str})
        (pad 32 thru_hole circle (at 29.74 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B4.str})
        (pad 33 thru_hole circle (at 32.28 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B5.str})
        (pad 34 thru_hole circle (at 34.82 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B6.str})
        (pad 35 thru_hole circle (at 37.36 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B7.str})
        (pad 36 thru_hole circle (at 39.90 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B8.str})
        (pad 37 thru_hole circle (at 42.44 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B9.str})
        (pad 38 thru_hole circle (at 44.98 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RAW.str})
        (pad 39 thru_hole circle (at 47.52 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 40 thru_hole circle (at 50.06 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
      `
    }
    if ((p.param.orientation == 'down' && p.param.side == 'F') || (p.param.orientation == 'up' && p.param.side == 'B')) {
      return `
        ${standard(p.param.side)}
        ${pins('-', '', p.param.side)})
        `
    } else {
      return `
        ${standard(p.param.side)}
        ${pins('', '-', p.param.side)})
        `
    }
  }
}
