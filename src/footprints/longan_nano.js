
module.exports = {
  nets: {
    A0: 'A0',
    A1: 'A1',
    A11: 'A11',
    A12: 'A12',
    A2: 'A2',
    A3: 'A3',
    A4: 'A4',
    A5: 'A5',
    A6: 'A6',
    A7: 'A7',
    A8: 'A8',
    B0: 'B0',
    B1: 'B1',
    B10: 'B10',
    B11: 'B11',
    B12: 'B12',
    B13: 'B13',
    B14: 'B14',
    B15: 'B15',
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
    RAW: 'RAW',
    RST: 'RST',
    VB: 'VB',
    VCC: 'VCC',
  },
  params: {
    class: 'MCU',
    orientation: 'down',
    side: 'F'
  },
  body: p => {
    function standard(side) {
      return `
        (module LonganNano (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${''/* component outline */}
        (fp_line (start 0.00 10.00) (end 47.50 10.00) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 47.50 10.00) (end 47.50 -10.00) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 47.50 -10.00) (end 0.00 -10.00) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 0.00 -10.00) (end 0.00 10.00) (layer ${side}.SilkS) (width 0.15))
      `
    }
    function pins(def_neg, def_pos, side) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start 4.33 ${def_pos}6.35) (end 6.87 ${def_pos}6.35) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 4.33 ${def_pos}6.35) (end 4.33 ${def_pos}8.89) (layer ${side}.SilkS) (width 0.15))
        (fp_line (start 6.87 ${def_pos}6.35) (end 6.87 ${def_pos}8.89) (layer ${side}.SilkS) (width 0.15))

        ${''/* pin names */}
        (fp_text user RST (at 5.60 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B11 (at 8.14 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B10 (at 10.68 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B1 (at 13.22 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B0 (at 15.76 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A7 (at 18.30 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A6 (at 20.84 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A5 (at 23.38 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A4 (at 25.92 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A3 (at 28.46 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A2 (at 31.00 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A1 (at 33.54 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A0 (at 36.08 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C13 (at 38.62 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C14 (at 41.16 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C15 (at 43.70 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VB (at 46.24 ${def_pos}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RAW (at 5.60 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at 8.14 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B12 (at 10.68 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B13 (at 13.22 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B14 (at 15.76 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B15 (at 18.30 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A8 (at 20.84 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A11 (at 23.38 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user A12 (at 25.92 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B4 (at 28.46 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B5 (at 31.00 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B6 (at 33.54 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B7 (at 36.08 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B8 (at 38.62 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B9 (at 41.16 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 43.70 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at 46.24 ${def_neg}4.8 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        ${''/* and now the actual pins */}
        (pad 1 thru_hole circle (at 5.60 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RST.str})
        (pad 2 thru_hole circle (at 8.14 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B11.str})
        (pad 3 thru_hole circle (at 10.68 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B10.str})
        (pad 4 thru_hole circle (at 13.22 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B1.str})
        (pad 5 thru_hole circle (at 15.76 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B0.str})
        (pad 6 thru_hole circle (at 18.30 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A7.str})
        (pad 7 thru_hole circle (at 20.84 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A6.str})
        (pad 8 thru_hole circle (at 23.38 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A5.str})
        (pad 9 thru_hole circle (at 25.92 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A4.str})
        (pad 10 thru_hole circle (at 28.46 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A3.str})
        (pad 11 thru_hole circle (at 31.00 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A2.str})
        (pad 12 thru_hole circle (at 33.54 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A1.str})
        (pad 13 thru_hole circle (at 36.08 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A0.str})
        (pad 14 thru_hole circle (at 38.62 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C13.str})
        (pad 15 thru_hole circle (at 41.16 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C14.str})
        (pad 16 thru_hole circle (at 43.70 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C15.str})
        (pad 17 thru_hole circle (at 46.24 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VB.str})
        (pad 18 thru_hole circle (at 5.60 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RAW.str})
        (pad 19 thru_hole circle (at 8.14 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
        (pad 20 thru_hole circle (at 10.68 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B12.str})
        (pad 21 thru_hole circle (at 13.22 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B13.str})
        (pad 22 thru_hole circle (at 15.76 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B14.str})
        (pad 23 thru_hole circle (at 18.30 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B15.str})
        (pad 24 thru_hole circle (at 20.84 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A8.str})
        (pad 25 thru_hole circle (at 23.38 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A11.str})
        (pad 26 thru_hole circle (at 25.92 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A12.str})
        (pad 27 thru_hole circle (at 28.46 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B4.str})
        (pad 28 thru_hole circle (at 31.00 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B5.str})
        (pad 29 thru_hole circle (at 33.54 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B6.str})
        (pad 30 thru_hole circle (at 36.08 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B7.str})
        (pad 31 thru_hole circle (at 38.62 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B8.str})
        (pad 32 thru_hole circle (at 41.16 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B9.str})
        (pad 33 thru_hole circle (at 43.70 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 34 thru_hole circle (at 46.24 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
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
