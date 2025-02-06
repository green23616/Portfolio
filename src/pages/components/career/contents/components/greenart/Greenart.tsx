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
            이론만 외우기보다 실전 예제를 만들어 스터디 멤버들과 코드에 대해
            토론하는 방식으로 학습을 진행했습니다.
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
          <h1>팀 프로젝트를 통한 경험</h1>
          <div className={styles.content}>
            <div>
              <h2>커뮤니케이션</h2>
              <h3>
                문제가 생겼을 때 대화를 통해 갈등을 해소하고, 감정과 업무를
                분리해 팀 분위기에 부정적인 영향을 최소화하는 것이 중요하다고
                생각합니다. 실제 업무 경험을 토대로 부조장으로서 업무 일정
                관리와 의견 충돌 시 중재하는 역할을 맡아 스터디와 팀 프로젝트를
                이끌었습니다. <br />
                대화가 길어져도 분위기와 요점을 파악하고 정리하는 스킬을 통해
                팀의 분위기에 빠르게 적응하고 업무에 유연함을 더할 자신이
                있습니다.
              </h3>
            </div>
            <div>
              <h2>우선순위에 따라 체계적으로</h2>
              <h3>
                개발에 앞서 설계가 중요하듯, 일의 중요도에 우선 순위를 매기고
                절차적으로 처리하는 스킬은 매우 중요하다고 생각합니다.
                <br />
                해야할 일의 중요도를 나누고 월간, 주간, 일별로 기록하며 체크하는
                습관을 가지고 있어 체계적인 회사 시스템과 Workflow에 빠르게
                적응할 자신이 있습니다.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greenart;
