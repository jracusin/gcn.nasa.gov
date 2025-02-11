/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const NoticeTypes: { [key: string]: string[] } = {
  AGILE: [
    'AGILE_GRB_GROUND',
    'AGILE_GRB_POS_TEST',
    'AGILE_GRB_REFINED',
    'AGILE_GRB_WAKEUP',
    'AGILE_MCAL_ALERT',
    'AGILE_POINTDIR',
    'AGILE_TRANS',
  ],
  AMON: [
    'AMON_ICECUBE_COINC',
    'AMON_ICECUBE_EHE',
    'AMON_ICECUBE_HESE',
    'AMON_NU_EM_COINC',
  ],
  Calet: ['CALET_GBM_FLT_LC', 'CALET_GBM_GND_LC'],
  Fermi: [
    'FERMI_GBM_ALERT',
    'FERMI_GBM_FIN_POS',
    'FERMI_GBM_FLT_POS',
    'FERMI_GBM_GND_POS',
    'FERMI_GBM_LC',
    'FERMI_GBM_POS_TEST',
    'FERMI_GBM_SUBTHRESH',
    'FERMI_GBM_TRANS',
    'FERMI_LAT_GND',
    'FERMI_LAT_MONITOR',
    'FERMI_LAT_OFFLINE',
    'FERMI_LAT_POS_DIAG',
    'FERMI_LAT_POS_INI',
    'FERMI_LAT_POS_TEST',
    'FERMI_LAT_POS_UPD',
    'FERMI_LAT_TRANS',
    'FERMI_POINTDIR',
    'FERMI_SC_SLEW',
  ],
  GECAM: ['GECAM_FLT', 'GECAM_GND'],
  IceCube: [
    'ICECUBE_ASTROTRACK_BRONZE',
    'ICECUBE_ASTROTRACK_GOLD',
    'ICECUBE_CASCADE',
  ],
  INTEGRAL: [
    'INTEGRAL_OFFLINE',
    'INTEGRAL_POINTDIR',
    'INTEGRAL_REFINED',
    'INTEGRAL_SPIACS',
    'INTEGRAL_WAKEUP',
    'INTEGRAL_WEAK',
  ],
  IPN: ['IPN_POS', 'IPN_RAW', 'IPN_SEG'],
  LVC: [
    'LVC_COUNTERPART',
    'LVC_EARLY_WARNING',
    'LVC_INITIAL',
    'LVC_PRELIMINARY',
    'LVC_RETRACTION',
    'LVC_TEST',
    'LVC_UPDATE',
  ],
  MAXI: ['MAXI_KNOWN', 'MAXI_TEST', 'MAXI_UNKNOWN'],
  Swift: [
    'SWIFT_ACTUAL_POINTDIR',
    'SWIFT_BAT_ALARM_LONG',
    'SWIFT_BAT_ALARM_SHORT',
    'SWIFT_BAT_GRB_ALERT',
    'SWIFT_BAT_GRB_LC',
    'SWIFT_BAT_GRB_LC_PROC',
    'SWIFT_BAT_GRB_POS_ACK',
    'SWIFT_BAT_GRB_POS_NACK',
    'SWIFT_BAT_GRB_POS_TEST',
    'SWIFT_BAT_KNOWN_SRC',
    'SWIFT_BAT_MONITOR',
    'SWIFT_BAT_QL_POS',
    'SWIFT_BAT_SCALEDMAP',
    'SWIFT_BAT_SLEW_POS',
    'SWIFT_BAT_SUB_THRESHOLD',
    'SWIFT_BAT_SUBSUB',
    'SWIFT_BAT_TRANS',
    'SWIFT_FOM_OBS',
    'SWIFT_FOM_PPT_ARG_ERR',
    'SWIFT_FOM_SAFE_POINT',
    'SWIFT_FOM_SLEW_ABORT',
    'SWIFT_POINTDIR',
    'SWIFT_SC_SLEW',
    'SWIFT_TOO_FOM',
    'SWIFT_TOO_SC_SLEW',
    'SWIFT_UVOT_DBURST',
    'SWIFT_UVOT_DBURST_PROC',
    'SWIFT_UVOT_EMERGENCY',
    'SWIFT_UVOT_FCHART',
    'SWIFT_UVOT_FCHART_PROC',
    'SWIFT_UVOT_POS',
    'SWIFT_UVOT_POS_NACK',
    'SWIFT_XRT_CENTROID',
    'SWIFT_XRT_EMERGENCY',
    'SWIFT_XRT_IMAGE',
    'SWIFT_XRT_IMAGE_PROC',
    'SWIFT_XRT_LC',
    'SWIFT_XRT_POSITION',
    'SWIFT_XRT_SPECTRUM',
    'SWIFT_XRT_SPECTRUM_PROC',
    'SWIFT_XRT_SPER',
    'SWIFT_XRT_SPER_PROC',
    'SWIFT_XRT_THRESHPIX',
    'SWIFT_XRT_THRESHPIX_PROC',
  ],
  Other: [
    'AAVSO',
    'ALEXIS_SRC',
    'BRAD_COORDS',
    'CBAT',
    'COINCIDENCE',
    'COMPTEL_SRC',
    'DOW_TOD',
    'GRB_CNTRPART',
    'GRB_COORDS',
    'GRB_FINAL',
    'GWHEN_COINC',
    'HAWC_BURST_MONITOR',
    'HUNTS_SRC',
    'KONUS_LC',
    'MAXBC',
    'MILAGRO_POS',
    'MOA',
    'OGLE',
    'SIMBADNED',
    'SK_SN',
    'SNEWS',
    'SUZAKU_LC',
    'TEST_COORDS',
  ],
}
