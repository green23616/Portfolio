import styles from './Greenart.module.scss';

function Greenart() {
  return (
    <div className={styles.greenart}>
      <div className={styles.greenart__above}>
        <div className={styles.greenart__above__text}>
          <h1>현장 교육과 스터디</h1>
          <h3>
            동료와 함께 학습하고 의견을 주고받는 분위기를 원해 현장 교육을
            메인으로 선택했고, 저녁에는 스터디와 인터넷 강의를 수강하며 제한된
            시간 내에 많은 것을 얻고자 노력하였습니다. <br />
            그저 이론을 외우기보다 예제를 만들고 과정에서 발생하는 오류를
            복기하며 학습하였습니다.
            <br /> 그 결과, 7개월 교육 과정이 끝난 시점에서 21명의 교육 인원 중
            가장 먼저 취업에 성공하였습니다.
          </h3>
        </div>
        <div className={styles.greenart__above__imageBox}>
          <img src="./images/greenart/img0.jpg" alt="img0" />
        </div>
      </div>
      <div className={styles.greenart__below}>
        <div className={styles.greenart__below__imageBox}>
          <img src="./images/greenart/img2.jpg" alt="img2" />
        </div>
        <div className={styles.greenart__below__text}>
          <h1>팀 프로젝트를 통한 협동 경험</h1>
          <div className={styles.content}>
            <div>
              <h2>커뮤니케이션</h2>
              <h3>
                팀에 문제가 생겼을 때 대화를 통해 문제를 해결하고, 뒤끝 없이
                나아가는 분위기의 중요성을 이해하고 경험해 보았기에 부조장으로서
                업무 흐름과 의견 중재 역할을 맡아 스터디와 팀 프로젝트를
                이끌었습니다. <br />
                감정적인 대화에서도 개인의 감정과 말하고자하는 요점을 잘 파악해
                정리하며 분위기를 풀어나가는 것에 자신이 있습니다.
                <br />
                전문성만큼이나 중요한 소통과 커뮤니케이션의 중요성을 이해하고
                팀의 분위기에 빠르게 녹아들어 업무에 유연함을 더할 수 있습니다.
              </h3>
            </div>
            <div>
              <h2>업무 우선순위 파악</h2>
              <h3>
                개발에 앞서 설계가 중요하듯이, 업무에서 일의 중요도에 순위를
                매기고 업무를 단계별로 처리하는 것에 자신이 있습니다. <br />
                일정 관리와 매일의 약속을 계획하고 지워나가는 습관을 가지고 있어
                체계적이고 효율적인 회사 시스템과 Workflow에 빠르게 적응할
                자신이 있습니다.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greenart;
